//
// Copyright © 2024 Hardcore Engineering Inc.
//
// Licensed under the Eclipse Public License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License. You may
// obtain a copy of the License at https://www.eclipse.org/legal/epl-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { type Builder, Mixin } from '@hcengineering/model'
import { type AnalyticsChannel } from '@hcengineering/analytics-collector'
import chunter from '@hcengineering/chunter'
import { TChannel } from '@hcengineering/model-chunter'

import analyticsCollector from './plugin'

export { analyticsCollectorId } from '@hcengineering/analytics-collector'
export { analyticsCollectorOperation } from './migration'
export default analyticsCollector

@Mixin(analyticsCollector.mixin.AnalyticsChannel, chunter.class.Channel)
export class TAnalyticsChannel extends TChannel implements AnalyticsChannel {
  workspace!: string
  email!: string
}

export function createModel (builder: Builder): void {
  builder.createModel(TAnalyticsChannel)
}
