#!/usr/bin/env node

import Creator from './helper'

const creator = new Creator()

if (creator.createReadme()) {
  creator.insertBadges()
}
