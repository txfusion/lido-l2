// SPDX-FileCopyrightText: 2023 Lido <info@lido.fi>
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.10;

/// @notice The L2 token bridge works with the L1 token bridge to enable ERC20 token bridging
///     between L1 and L2. Mints tokens during deposits and burns tokens during withdrawals.
interface IL2ERC20Bridge {
    event FinalizeDeposit(
        address indexed l1Sender,
        address indexed l2Receiver,
        address indexed l2Token,
        uint256 amount,
        bytes data
    );

    event WithdrawalInitiated(
        address indexed l2Sender,
        address indexed l1Receiver,
        address indexed l2Token,
        uint256 amount
    );

    /// @notice Finalize the deposit and mint tokens
    /// @param _l1Sender The account address that initiated the deposit on L1
    /// @param _l2Receiver The account address that would receive minted tokens
    /// @param _l1Token The address of the token that was locked on the L1
    /// @param _amount Total amount of tokens deposited from L1
    /// @param _data The additional data that user can pass with the deposit
    function finalizeDeposit(
        address _l1Sender,
        address _l2Receiver,
        address _l1Token,
        uint256 _amount,
        bytes calldata _data
    ) external payable;

    /// @notice Initiates a withdrawal by burning tokens on the contract and sending the message to L1
    /// where tokens would be unlocked
    /// @param _l1Receiver The account address that should receive tokens on L1
    /// @param _l2Token The L2 token address which is withdrawn
    /// @param _amount The total amount of tokens to be withdrawn
    function withdraw(
        address _l1Receiver,
        address _l2Token,
        uint256 _amount
    ) external;

    /// @notice Returns the address of the L1 token contract
    function l1TokenAddress(address _l2Token) external view returns (address);

    /// @notice Returns the address of the L2 token contract
    function l2TokenAddress(address _l1Token) external view returns (address);

    /// @notice Returns the address of the corresponding L1 bridge contract
    function l1Bridge() external view returns (address);
}
