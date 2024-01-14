export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          author: string
          body: string
          created_at: string
          id: string
          parent_post: string
        }
        Insert: {
          author: string
          body?: string
          created_at?: string
          id?: string
          parent_post: string
        }
        Update: {
          author?: string
          body?: string
          created_at?: string
          id?: string
          parent_post?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_parent_post_fkey"
            columns: ["parent_post"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      conversations: {
        Row: {
          created_at: string
          id: number
          user1: string
          user2: string
        }
        Insert: {
          created_at?: string
          id?: number
          user1: string
          user2: string
        }
        Update: {
          created_at?: string
          id?: number
          user1?: string
          user2?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversations_user1_fkey"
            columns: ["user1"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversations_user2_fkey"
            columns: ["user2"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      dislikes: {
        Row: {
          author: string
          created_at: string
          id: string
          parent_post: string
        }
        Insert: {
          author: string
          created_at?: string
          id?: string
          parent_post: string
        }
        Update: {
          author?: string
          created_at?: string
          id?: string
          parent_post?: string
        }
        Relationships: [
          {
            foreignKeyName: "dislikes_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dislikes_parent_post_fkey"
            columns: ["parent_post"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      followers: {
        Row: {
          created_at: string
          daddy: string
          id: string
          kitten: string
        }
        Insert: {
          created_at?: string
          daddy: string
          id?: string
          kitten: string
        }
        Update: {
          created_at?: string
          daddy?: string
          id?: string
          kitten?: string
        }
        Relationships: [
          {
            foreignKeyName: "followers_daddy_fkey"
            columns: ["daddy"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "followers_kitten_fkey"
            columns: ["kitten"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      likes: {
        Row: {
          author: string
          created_at: string
          id: string
          parent_post: string
        }
        Insert: {
          author: string
          created_at?: string
          id?: string
          parent_post: string
        }
        Update: {
          author?: string
          created_at?: string
          id?: string
          parent_post?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_parent_post_fkey"
            columns: ["parent_post"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      messages: {
        Row: {
          author: string
          body: string | null
          created_at: string
          id: number
          parent_conversation: number | null
        }
        Insert: {
          author: string
          body?: string | null
          created_at?: string
          id?: number
          parent_conversation?: number | null
        }
        Update: {
          author?: string
          body?: string | null
          created_at?: string
          id?: number
          parent_conversation?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_parent_conversation_fkey"
            columns: ["parent_conversation"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          }
        ]
      }
      posts: {
        Row: {
          author: string
          comments: Json[]
          created_at: string
          description: string
          id: string
          img_url: string | null
        }
        Insert: {
          author: string
          comments?: Json[]
          created_at?: string
          description: string
          id?: string
          img_url?: string | null
        }
        Update: {
          author?: string
          comments?: Json[]
          created_at?: string
          description?: string
          id?: string
          img_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
