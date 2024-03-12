import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		isDraft: z.boolean().default(false),
	}),
});

const video = defineCollection({
	type: 'content', 
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(), 
		heroImage: z.string().optional(),
		videoUrl: z.string().optional(),
		thumbnailUrl: z.string().optional(),
		isDraft: z.boolean().default(false),
	})
})

const photography = defineCollection({
	type: 'content', 
	schema: z.object({
		title: z.string(), 
		pubDate: z.coerce.date(), 
		heroImage: z.string().optional(),
	})
})

const webdev = defineCollection({
	type: 'content', 
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(), 
		heroImage: z.string().optional(),

	})
})

export const collections = { blog, video, photography, webdev };
