CREATE TABLE `rate_events` (
	`id` text PRIMARY KEY NOT NULL,
	`bucket` text NOT NULL,
	`key` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `rate_events_lookup` ON `rate_events` (`bucket`,`key`,`created_at`);--> statement-breakpoint
CREATE INDEX `rate_events_created` ON `rate_events` (`created_at`);