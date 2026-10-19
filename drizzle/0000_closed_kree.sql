CREATE TABLE `designs` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text NOT NULL,
	`product_id` text NOT NULL,
	`data` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `designs_owner` ON `designs` (`owner_id`);--> statement-breakpoint
CREATE TABLE `orders` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text NOT NULL,
	`reference` text NOT NULL,
	`request_id` text NOT NULL,
	`kind` text NOT NULL,
	`product_id` text NOT NULL,
	`snapshot` text NOT NULL,
	`status` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `orders_owner` ON `orders` (`owner_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `orders_request` ON `orders` (`request_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `orders_reference` ON `orders` (`reference`);--> statement-breakpoint
CREATE TABLE `production_outbox` (
	`id` text PRIMARY KEY NOT NULL,
	`order_id` text NOT NULL,
	`status` text NOT NULL,
	`attempts` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `outbox_order` ON `production_outbox` (`order_id`);--> statement-breakpoint
CREATE TABLE `uploads` (
	`id` text PRIMARY KEY NOT NULL,
	`owner_id` text NOT NULL,
	`key` text NOT NULL,
	`name` text NOT NULL,
	`mime` text NOT NULL,
	`size` integer NOT NULL,
	`digest` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `uploads_owner` ON `uploads` (`owner_id`);