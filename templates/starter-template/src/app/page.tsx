import { Button, Container } from "@meadowbrook/ui-core";

import { client } from "@/sanity/client";

export default async function Home() {
  const postCount = await client.fetch<number>(`count(*[_type == "post"])`);

  return (
    <Container className="py-24">
      <h1 className="text-3xl font-semibold tracking-tight">
        Client Starter Template
      </h1>
      <p className="mt-2 text-neutral-600">
        {postCount} post{postCount === 1 ? "" : "s"} in Sanity. Edit{" "}
        <code>src/app/page.tsx</code> to get started.
      </p>
      <Button className="mt-6">Shared Button component</Button>
    </Container>
  );
}
