import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const code = pgTable("fql_code", {
  id: serial("id").primaryKey(),
  code: varchar("code", { length: 30 }),
  createTime: timestamp("create_time").defaultNow(),
  updateTime: timestamp("update_time").defaultNow(),
  deleteTime: timestamp("delete_time"),
});

export const usedLog = pgTable("fql_used_log", {
  id: serial("id").primaryKey(),
  code: varchar("code", { length: 30 }),
  createTime: timestamp("create_time").defaultNow(),
  updateTime: timestamp("update_time").defaultNow(),
  deleteTime: timestamp("delete_time"),
});
