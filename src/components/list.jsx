/* eslint-disable react/prop-types */

import { Card, Image, Text, Center } from "@mantine/core";

export function List({ items }) {
  return (
    <>
      {items.map((item) => (
        <Card
          key={item.id}
          href={item.href}
          target="_blank"
          component="a"
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          <Card.Section>
            <Image src={item.img} h={250} />
          </Card.Section>
          <Center>
            <Text fw={500} size="lg" mt="md" fs="oblique">
              {item.name}
            </Text>
          </Center>
          <Text mt="xs" c="dimmed" size="sm">
            {item.description}
          </Text>
        </Card>
      ))}
    </>
  );
}
