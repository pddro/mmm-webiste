import { Hono } from "hono";
import { XMLParser } from 'fast-xml-parser';

const app = new Hono<{ Bindings: Env }>();

// Interface for parsed episode data
interface Episode {
  title: string;
  description: string;
  image: string;
  spotifyUrl: string;
  pubDate: string;
  guid: string;
}

app.get('/api/episodes', async (c) => {
  // Set CORS headers
  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  c.header('Access-Control-Allow-Headers', 'Content-Type');
  
  try {
    // Fetch the RSS feed
    const response = await fetch('https://anchor.fm/s/e6a51568/podcast/rss');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.status}`);
    }
    
    const xmlData = await response.text();
    
    // Parse XML
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
    });
    
    const result = parser.parse(xmlData);
    const channel = result.rss.channel;
    
    // Extract episodes data
    const items = Array.isArray(channel.item) ? channel.item : [channel.item];
    
    const episodes: Episode[] = items.slice(0, 10).map((item: any) => {
      // Extract image from iTunes or enclosure
      let imageUrl = '';
      if (item['itunes:image'] && item['itunes:image']['@_href']) {
        imageUrl = item['itunes:image']['@_href'];
      } else if (channel['itunes:image'] && channel['itunes:image']['@_href']) {
        imageUrl = channel['itunes:image']['@_href'];
      }
      
      // Extract Spotify URL from description or link
      let spotifyUrl = '';
      if (item.link) {
        spotifyUrl = item.link;
      } else if (item.description && typeof item.description === 'string') {
        // Try to extract Spotify link from description
        const spotifyMatch = item.description.match(/https:\/\/open\.spotify\.com\/[^\s<"]+/);
        if (spotifyMatch) {
          spotifyUrl = spotifyMatch[0];
        }
      }
      
      // Fallback to general Spotify podcast page if no specific episode link found
      if (!spotifyUrl) {
        spotifyUrl = 'https://creators.spotify.com/pod/profile/andreacardonaeverest/';
      }
      
      return {
        title: item.title || 'Sin título',
        description: typeof item.description === 'string' 
          ? item.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...'
          : 'Sin descripción',
        image: imageUrl,
        spotifyUrl: spotifyUrl,
        pubDate: item.pubDate || '',
        guid: item.guid?.['#text'] || item.guid || Math.random().toString(),
      };
    });
    
    return c.json({
      success: true,
      episodes: episodes,
      total: episodes.length
    });
    
  } catch (error) {
    console.error('Error fetching episodes:', error);
    return c.json({
      success: false,
      error: 'Failed to fetch episodes',
      episodes: [],
      total: 0
    }, 500);
  }
});

export default app;
