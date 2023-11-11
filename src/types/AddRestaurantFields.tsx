import { OpenHoursDays } from "@types";

export interface AddRestaurantFields  extends Record<string, string | File | undefined | null | OpenHoursDays>{
  name: string;
  description: string;
  address: string;
  image: File | null;
  openHours: OpenHoursDays
  }