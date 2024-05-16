/* eslint-disable react-hooks/rules-of-hooks */
import { List } from "../../components/list";
import { list as importedList } from "../../server/list.json";
import { SimpleGrid, Text } from "@mantine/core";
import { useState } from "react";

const list = () => {
  const [list] = useState(importedList);

  return (
    <>
      <h1>List Page</h1>
      <div>
        <Text>
          Aqui estan todas tus series favoritas, disfrutalas y no olvides
          compartir tus sentimientos conmigo, siempre que quieras verlas puedes
          decirme y las veremos juntos, recuerda que siempre estare para ti, te
          amo mi mundo.
        </Text>
        <br />
      </div>
      <SimpleGrid cols={4}>
        <List items={list} />
      </SimpleGrid>
    </>
  );
};

export default list;
