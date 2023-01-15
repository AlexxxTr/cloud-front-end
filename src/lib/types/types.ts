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
      gas_readings: {
        Row: {
          created_at: string | null;
          cubic_meters: number;
          id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          cubic_meters: number;
          id?: number;
          user_id?: string;
        };
        Update: {
          created_at?: string | null;
          cubic_meters?: number;
          id?: number;
          user_id?: string;
        };
      };
      gas_usages: {
        Row: {
          cost: number | null;
          created_at: string | null;
          id: number;
          kWh: number;
          user_id: string;
        };
        Insert: {
          cost?: number | null;
          created_at?: string | null;
          id?: number;
          kWh: number;
          user_id?: string;
        };
        Update: {
          cost?: number | null;
          created_at?: string | null;
          id?: number;
          kWh?: number;
          user_id?: string;
        };
      };
      temperatures: {
        Row: {
          created_at: string | null;
          id: number;
          temperature: number;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          temperature: number;
          user_id?: string;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          temperature?: number;
          user_id?: string;
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
