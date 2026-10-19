CREATE TABLE `portfolio_photos` (
	`id` text PRIMARY KEY NOT NULL,
	`project_id` text,
	`key` text NOT NULL,
	`name` text NOT NULL,
	`mime` text NOT NULL,
	`size` integer NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `portfolio_photos_project` ON `portfolio_photos` (`project_id`);--> statement-breakpoint
CREATE TABLE `portfolio_projects` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`title_en` text DEFAULT '' NOT NULL,
	`description` text DEFAULT '' NOT NULL,
	`description_en` text DEFAULT '' NOT NULL,
	`category` text NOT NULL,
	`cover_id` text NOT NULL,
	`published` integer DEFAULT false NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE `orders` ADD `admin_notes` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `orders` ADD `updated_at` integer;