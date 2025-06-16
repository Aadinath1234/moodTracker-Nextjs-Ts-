// /api/api.ts
import axios from 'axios';

export interface MoodEntry {
  mood: string;
  intensity: string;
  notes: string;
  timestamp: string; // ISO 8601
}

// Replace with your real endpoint if needed
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

/**
 * Submit a mood entry (mock POST request)
 */
export const submitMoodEntry = async (entry: MoodEntry) => {
  try {
    const response = await axios.post(BASE_URL, entry);
    return response.data;
  } catch (error) {
    console.error('Error submitting mood entry:', error);
    throw error;
  }
};

/**
 * Fetch mood history (mock GET request)
 * Replace with actual endpoint to fetch real mood data.
 */
export const fetchMoodHistory = async (): Promise<MoodEntry[]> => {
  try {
     // const response = await axios.get(BASE_URL);
    // Simulated transformation for now
    const mockData: MoodEntry[] = [
      {
        mood: 'Happy',
        intensity: 'Moderate',
        notes: 'Had a good breakfast',
        timestamp: '2025-06-13T08:30:00Z',
      },
      {
        mood: 'Sad',
        intensity: 'Complete',
        notes: 'Bad weather all day',
        timestamp: '2025-06-14T15:20:00Z',
      },
    ];
    return mockData;
  } catch (error) {
    console.error('Error fetching mood history:', error);
    throw error;
  }
};
