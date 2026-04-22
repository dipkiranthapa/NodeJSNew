import dotenv from "dotenv";
dotenv.config();

const config = {
  name: process.env.NAME || "",
  port: process.env.PORT || 3000,
  version: process.env.VERSION || "",
  feature: {
    admin: {
      enabled: process.env.FEATURE_ADMIN_ENABLED || 1,
    },
  },
};

export default config;
