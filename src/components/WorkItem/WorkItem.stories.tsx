import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {WorkItem} from './WorkItem';

const meta: Meta<typeof WorkItem> = {
  component: WorkItem,
};

export default meta;

type Story = StoryObj<typeof WorkItem>;

export const Basic: Story = {args: {}};
