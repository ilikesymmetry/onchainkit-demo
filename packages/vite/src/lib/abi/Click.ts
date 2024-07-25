export const clickAbi = [
    {
      type: "function",
      name: "callWithPermission",
      inputs: [
        { name: "", type: "bytes32", internalType: "bytes32" },
        { name: "", type: "bytes", internalType: "bytes" },
        { name: "call", type: "bytes", internalType: "bytes" },
      ],
      outputs: [{ name: "", type: "bytes", internalType: "bytes" }],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "click",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "Click",
      inputs: [
        {
          name: "sender",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "AddressEmptyCode",
      inputs: [{ name: "target", type: "address", internalType: "address" }],
    },
    { type: "error", name: "FailedCall", inputs: [] },
  ] as const;