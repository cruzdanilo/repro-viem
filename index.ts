import { createWalletClient, http } from "viem";
import { mnemonicToAccount } from "viem/accounts";
import { mainnet } from "viem/chains";

export default createWalletClient({
  chain: mainnet,
  transport: http(),
  account: mnemonicToAccount("test test test test test test test test test test test junk"),
});
