/* eslint-disable react/prop-types */
import { Card, Image, Text, Center } from "@mantine/core";

export function Games({ games }) {
  return (
    <>
      {games.map((game) => (
        <Card
          key={game.id}
          href={game.href}
          target="_blank"
          component="a"
          hadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          <Card.Section>
            <Image src={game.img} h={250} />
          </Card.Section>
          <Center>
            <Text fw={500} size="lg" mt="md" fs="oblique">
              {game.name}
            </Text>
          </Center>
          <Text mt="xs" c="dimmed" size="sm">
            {game.description}
          </Text>
        </Card>
      ))}
    </>
  );
}
