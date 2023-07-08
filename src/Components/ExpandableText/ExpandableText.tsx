import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const limit = 50;

  if (children && children.split(" ").length <= limit)
    return <Text>{children}</Text>;

  const summary = children.split(" ").slice(0, limit).join(" ");

  return (
    <>
      <Text>
        {isExpanded ? children : `${summary}...`}
        <Button
          marginLeft={3}
          colorScheme="yellow"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
