export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      gas_reading: {
        Row: {
          created_at: string | null;
          cubic_meters: number;
          id: number;
        };
        Insert: {
          created_at?: string | null;
          cubic_meters: number;
          id?: number;
        };
        Update: {
          created_at?: string | null;
          cubic_meters?: number;
          id?: number;
        };
      };
      gas_usage: {
        Row: {
          cost: number | null;
          date: string | null;
          id: number;
          kWh: number;
        };
        Insert: {
          cost?: number | null;
          date?: string | null;
          id?: number;
          kWh: number;
        };
        Update: {
          cost?: number | null;
          date?: string | null;
          id?: number;
          kWh?: number;
        };
      };
      temperature: {
        Row: {
          date: string | null;
          id: number;
          temperature: number;
        };
        Insert: {
          date?: string | null;
          id?: number;
          temperature: number;
        };
        Update: {
          date?: string | null;
          id?: number;
          temperature?: number;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
