export const ZKSYNC_ADDRESSES = {
  l1: {
    l1Token: process.env.CONTRACTS_L1_LIDO_TOKEN_ADDR as string,
    l1Bridge: process.env.CONTRACTS_L1_LIDO_BRIDGE_PROXY_ADDR as string,
    l1BridgeImpl: process.env.CONTRACTS_L1_LIDO_BRIDGE_IMPL_ADDR as string,
    l1Executor: process.env.L1_EXECUTOR_ADDR as string,
    l1ExecutorImpl: process.env.L1_EXECUTOR_IMPL_ADDR as string,
    agent: process.env.CONTRACTS_L1_GOVERNANCE_AGENT_ADDR as string,
    emergencyBrakeMultisig: process.env.L1_EMERGENCY_BRAKE_MULTISIG as string,
  },
  l2: {
    l2Token: process.env.CONTRACTS_L2_LIDO_TOKEN_ADDR as string,
    l2TokenImpl: process.env.CONTRACTS_L2_LIDO_TOKEN_IMPL_ADDR as string,
    l2Bridge: process.env.CONTRACTS_L2_LIDO_BRIDGE_PROXY_ADDR as string,
    l2BridgeImpl: process.env.CONTRACTS_L2_LIDO_BRIDGE_IMPL_ADDR as string,
    govExecutor: process.env.L2_BRIDGE_EXECUTOR_ADDR as string,
    govExecutorImpl: process.env.L2_BRIDGE_EXECUTOR_IMPL_ADDR as string,
    emergencyBrakeMultisig: process.env.L2_EMERGENCY_BRAKE_MULTISIG as string,
    guardian: process.env.GUARDIAN_ADDRESS as string,
    proxyAdmin: process.env.TRANSPARENT_PROXY_ADMIN as string,
    diamondProxy: process.env.CONTRACTS_DIAMOND_PROXY_ADDR as string,
  },
};
