export interface ResponseData {
  msg: string;
  group_data: GroupData;
  status: number;
  completed_percentage: number;
  page_image: null;
  total_fail: number;
  total_fail_fixed_by_widget: number;
  total_success: number;
  reload: boolean;
  widget_purchased: boolean;
  is_paid_free: number;
  url: string;
  request_data: RequestData;
  accessibility_system_detected: string;
  level_fail_counts: LevelFailCounts;
  level_fail_counts_fixed_by_widget: LevelFailCounts;
}

export interface GroupData {
  Clickables: GroupDataT[];
  Titles: GroupDataT[];
  Lists: GroupDataT[];
  Graphics: GroupDataT[];
  Forms: GroupDataT[];
  Document: GroupDataT[];
  Readability: GroupDataT[];
  Tables: GroupDataT[];
  General: GroupDataT[];
  Content: GroupDataT[];
  "Audio/Video": GroupDataT[];
}

export interface GroupDataT {
  id: number;
  message_readable: string;
  requirement: string;
  language_key: string;
  group_id: number;
  visually_impaired: number;
  cognitive_disabilities: number;
  motor_impaired: number;
  blind: number;
  color_blind: number;
  dyslexia: number;
  seizure_epileptic: number;
  adhd: number;
  elderly: number;
  level_a: number;
  level_aa: number;
  level_aaa: number;
  level_messages_a: string[];
  level_messages_aa: string[];
  level_messages_aaa: string[];
  user_impact: number;
  created_at: null;
  updated_at: null;
  deleted_at: null;
  status: number;
  group_name: string;
  total_error: number;
  error_details: Detail[];
  is_fixed_by_widget: number;
  total_success: number;
  success_details: Detail[];
}

export interface Detail {
  id: number;
  context: string;
  TotalFails: number;
}

export interface LevelFailCounts {
  A: number;
  AA: number;
  AAA: number;
}

export interface RequestData {
  id: number;
  url: string;
  status: number;
  process: number;
  time_out: number;
  accessibility_system: string;
  in_process: number;
  screen_image_path: string;
  ip_address: string;
  is_unauthorized: number;
  is_paid_free: number;
  scan_status: number;
  reload: number;
}

export interface ImageRespData {
  msg: string;
  page_image: string;
  status: number;
  url: string;
  request_data: RequestData;
  time: number;
  end_time: number;
}

export interface RequestData {
  id: number;
  url: string;
  status: number;
  process: number;
  time_out: number;
  accessibility_system: string;
  in_process: number;
  screen_image_path: string;
  ip_address: string;
  is_unauthorized: number;
  is_paid_free: number;
  scan_status: number;
  reload: number;
}
