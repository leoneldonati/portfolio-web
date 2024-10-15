import { db, Post } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO

	await db.insert(Post).values({
		id: crypto.randomUUID(),
		content: 'Esto es un ejemplo de contenido de un posteo en el blog, el contenido puede ser largo y demas',
		likes: 5,
		links: 'https://github.com, https://leodonati.site',
		title: 'Titulo del post.',
		topics: 'programacion, blog, topics',
	})
	await db.insert(Post).values({
		id: crypto.randomUUID(),
		content: 'Esto es un ejemplo de contenido de un posteo en el blog, el contenido puede ser largo y demas',
		likes: 5,
		links: 'https://github.com, https://leodonati.site',
		title: 'Titulo del post 2.',
		topics: 'programacion, blog, topics',
	})
	await db.insert(Post).values({
		id: crypto.randomUUID(),
		content: 'Esto es un ejemplo de contenido de un posteo en el blog, el contenido puede ser largo y demas lorem ipsum',
		likes: 5,
		links: 'https://github.com, https://leodonati.site',
		title: 'Titulo del post 3.',
		topics: 'programacion, blog, topics',
	})
	await db.insert(Post).values({
		id: crypto.randomUUID(),
		content: 'Esto es un ejemplo de contenido de un posteo en el blog, el contenido puede ser largo y demas lorem ipsum',
		likes: 5,
		links: 'https://github.com, https://leodonati.site',
		title: 'Titulo del post 3.',
		topics: 'programacion, blog, topics',
	})
	await db.insert(Post).values({
		id: crypto.randomUUID(),
		content: 'Esto es un ejemplo de contenido de un posteo en el blog, el contenido puede ser largo y demas lorem ipsum',
		likes: 5,
		links: 'https://github.com, https://leodonati.site',
		title: 'Titulo del post 3.',
		topics: 'programacion, blog, topics',
	})
	await db.insert(Post).values({
		id: crypto.randomUUID(),
		content: 'Esto es un ejemplo de contenido de un posteo en el blog, el contenido puede ser largo y demas lorem ipsum',
		likes: 5,
		links: 'https://github.com, https://leodonati.site',
		title: 'Titulo del post 3.',
		topics: 'programacion, blog, topics',
	})
	await db.insert(Post).values({
		id: crypto.randomUUID(),
		content: 'Esto es un ejemplo de contenido de un posteo en el blog, el contenido puede ser largo y demas lorem ipsum',
		likes: 5,
		links: 'https://github.com, https://leodonati.site',
		title: 'Titulo del post 3.',
		topics: 'programacion, blog, topics',
	})
	await db.insert(Post).values({
		id: crypto.randomUUID(),
		content: 'Esto es un ejemplo de contenido de un posteo en el blog, el contenido puede ser largo y demas lorem ipsum',
		likes: 5,
		links: 'https://github.com, https://leodonati.site',
		title: 'Titulo del post 3.',
		topics: 'programacion, blog, topics',
	})
	await db.insert(Post).values({
		id: crypto.randomUUID(),
		content: 'Esto es un ejemplo de contenido de un posteo en el blog, el contenido puede ser largo y demas lorem ipsum',
		likes: 5,
		links: 'https://github.com, https://leodonati.site',
		title: 'Titulo del post 3.',
		topics: 'programacion, blog, topics',
	})
}