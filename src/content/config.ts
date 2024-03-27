
import { defineCollection, reference, z } from 'astro:content';

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
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		author: z.string(),
		client: z.string().optional(),
		pubDate: z.coerce.date(), 
		heroImage: image().refine((img) => img.width >= 1080, {
			message: "heroImage needs to be 1080 pixels wide!"
		}),
		videoUrl: z.string().optional(),
		thumbnailUrl: z.string().optional(),
		isDraft: z.boolean().default(false),
	})
})

const photography = defineCollection({
	type: 'content', 
	schema: ({ image }) => z.object({
		title: z.string(), 
		pubDate: z.coerce.date(), 
		description: z.string().optional(),
		heroImage: image().refine((img) => img.width >= 1080, {
			message: "heroImage needs to be 1080 pixels wide!"
		}),
		location: z.string().optional(),
		camera: z.string().optional(),
		lenses: z.string().optional(),

	})
})

const webdev = defineCollection({
	type: 'content', 
	schema: ({ image }) =>z.object({
		title: z.string(),
		pubDate: z.coerce.date(), 
		status: z.string(),
		description: z.string().optional(),
		heroImage: image().refine((img) => img.width >= 1080, {
			message: "heroImage needs to be 1080 pixels wide!"
		}),

	})
})


export const collections = { blog, video, photography, webdev };
