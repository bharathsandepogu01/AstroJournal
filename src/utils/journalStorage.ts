import { mmkvStorage } from './storage';
import { format } from './date';

export interface JournalEntry {
  id: string;
  date: string;
  content: string;
  timestamp: number;
}

const JOURNAL_STORAGE_KEY = 'astro_journal_entries';

export const journalStorage = {
  // Save a journal entry for a specific date
  saveEntry: (date: string, content: string): void => {
    const entries = journalStorage.getAllEntries();
    const entry: JournalEntry = {
      id: date,
      date,
      content,
      timestamp: Date.now(),
    };

    entries[date] = entry;
    mmkvStorage.setItem(JOURNAL_STORAGE_KEY, entries);
  },

  // Get journal entry for a specific date
  getEntry: (date: string): JournalEntry | null => {
    const entries = journalStorage.getAllEntries();
    return entries[date] || null;
  },

  // Get all journal entries
  getAllEntries: (): Record<string, JournalEntry> => {
    return mmkvStorage.getItem(JOURNAL_STORAGE_KEY) || {};
  },

  // Get recent journal entries (last 30 days)
  getRecentEntries: (): JournalEntry[] => {
    const entries = journalStorage.getAllEntries();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    return Object.values(entries)
      .filter(entry => new Date(entry.date) >= thirtyDaysAgo)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },

  // Delete a journal entry
  deleteEntry: (date: string): void => {
    const entries = journalStorage.getAllEntries();
    delete entries[date];
    mmkvStorage.setItem(JOURNAL_STORAGE_KEY, entries);
  },

  // Clear all journal entries
  clearAllEntries: (): void => {
    mmkvStorage.removeItem(JOURNAL_STORAGE_KEY);
  },

  // Get today's entry
  getTodayEntry: (): JournalEntry | null => {
    const today = format(new Date(), 'yyyy-MM-dd');
    return journalStorage.getEntry(today);
  },

  // Save today's entry
  saveTodayEntry: (content: string): void => {
    const today = format(new Date(), 'yyyy-MM-dd');
    journalStorage.saveEntry(today, content);
  },
};
