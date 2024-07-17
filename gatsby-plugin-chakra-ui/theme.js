import { theme as old } from "@chakra-ui/core"

const theme = {
  ...old,
  colors: {
    ...old.colors,
    orange: { ...old.colors.orange, 500: "#f7fafc" },
  },
}

export default theme
