import {
  MemoryRounded,
  StorageRounded,
  ViewInArRounded,
} from "@mui/icons-material";

export default [
  {
    name: "CPU",
    icon: MemoryRounded,
    children: [
      {
        name: "Intel",
        children: [
          {
            name: "i5",
          },
          {
            name: "i7",
          },
          {
            name: "i9",
          },
        ],
      },
      {
        name: "AMD",
        children: [
          {
            name: "Ryzen 5",
          },
          {
            name: "Ryzen 7",
          },
          {
            name: "Ryzen 9",
          },
        ],
      },
    ],
  },
  {
    name: "GPU",
    icon: ViewInArRounded,
    children: [
      {
        name: "Nvidia",
        children: [
          {
            name: "RTX 3070",
          },
          {
            name: "RTX 3080",
          },
        ],
      },
      {
        name: "AMD",
        children: [
          {
            name: "Radeon RX 6800",
          },
          {
            name: "Radeon RX 6900",
          },
        ],
      },
    ],
  },
  {
    name: "Memory",
    icon: StorageRounded,
    children: [
      {
        name: "Corsair",
        children: [
          {
            name: "8GB",
          },
          {
            name: "16GB",
          },
        ],
      },
      {
        name: "XPG",
        children: [
          {
            name: "8GB",
          },
          {
            name: "16GB",
          },
        ],
      },
    ],
  },
];
