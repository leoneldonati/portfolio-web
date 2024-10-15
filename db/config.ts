import { column, defineDb, defineTable } from 'astro:db';

const Post = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    topics: column.text(),
    content: column.text(),
    images: column.text({ optional: true }),
    links: column.text(),
    likes: column.number()
  }
})
const Borrors = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    topics: column.text(),
    content: column.text(),
    images: column.text({ optional: true }),
    links: column.text(),
  }
})
// https://astro.build/db/config
export default defineDb({
  tables: {
    Post,
    Borrors
  }
});
