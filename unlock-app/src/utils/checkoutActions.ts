import { PaywallConfig } from '../unlockTypes'

export type Action =
  | SetConfig
  | SetShowingLogin
  | SetPurchasingLockAddress
  | SetTransactionHash

interface SetConfig {
  kind: 'setConfig'
  config: PaywallConfig
}

export const setConfig = (config: PaywallConfig): SetConfig => ({
  kind: 'setConfig',
  config,
})

interface SetShowingLogin {
  kind: 'setShowingLogin'
  value: boolean
}

export const setShowingLogin = (value: boolean): SetShowingLogin => ({
  kind: 'setShowingLogin',
  value,
})

interface SetPurchasingLockAddress {
  kind: 'setPurchasingLockAddress'
  address: string
}

export const setPurchasingLockAddress = (
  address: string
): SetPurchasingLockAddress => ({
  kind: 'setPurchasingLockAddress',
  address,
})

interface SetTransactionHash {
  kind: 'setTransactionHash'
  hash: string
}

export const setTransactionHash = (hash: string): SetTransactionHash => ({
  kind: 'setTransactionHash',
  hash,
})
