// graphql/builder.ts


import SchemaBuilder from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import {prisma} from "@/db";

 
export const builder = new SchemaBuilder<{

  PrismaTypes: PrismaTypes
}>({

  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  }
})

 
builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});