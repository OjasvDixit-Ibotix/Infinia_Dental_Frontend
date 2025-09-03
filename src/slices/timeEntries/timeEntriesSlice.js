import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from "../../utils/api/api"; // Adjust the import path as needed

const formatDate = (dateString) => {
  if (!dateString) return "--";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const formatTime = (dateTimeString) => {
  if (!dateTimeString) return "--";
  const date = new Date(dateTimeString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const formatStatus = (status) => {
    if (!status) return "--";
    return status.charAt(0).toUpperCase() + status.slice(1);
}

const formatDuration = (totalHours) => {
  if (totalHours === null || typeof totalHours !== 'number') {
    return "--";
  }
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);
  return `${hours}h ${minutes}m`;
};

export const fetchTimeEntries = createAsyncThunk(
  'timeEntries/fetchTimeEntries',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get("/time-entries");
      if (response.data && response.data.time_entries) {
        return response.data.time_entries.map((entry) => ({
          id: entry.id,
          date: formatDate(entry.date),
          clockIn: formatTime(entry.clock_in),
          clockOut: formatTime(entry.clock_out),
          totalHours: formatDuration(entry.total_hours),
          status: formatStatus(entry.status),
          notes: entry.notes ?? "--",
        }));
      }
      return []; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  timeEntries: [],
  isLoading: false,
  error: null,
};


const timeEntriesSlice = createSlice({
  name: 'timeEntries',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimeEntries.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTimeEntries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.timeEntries = action.payload;
      })
      .addCase(fetchTimeEntries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default timeEntriesSlice.reducer;
