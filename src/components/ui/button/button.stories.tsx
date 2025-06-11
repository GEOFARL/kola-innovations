import type { Meta, StoryObj } from '@storybook/react';
import Button, {
  buttonColors,
  buttonSizes,
  buttonVariants,
  type Variant,
} from './button';
import { Search } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [...buttonVariants],
    },
    size: {
      control: { type: 'select' },
      options: [...buttonSizes],
    },
    color: {
      control: { type: 'select' },
      options: [...buttonColors],
    },
    iconOnly: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

const renderVariants = (variant: Variant) => (
  <div className="flex gap-12">
    {buttonColors.map((color) => (
      <div key={color} className="flex flex-col gap-6">
        {buttonSizes.map((size) => (
          <div
            key={`${color}-${variant}-${size}`}
            className="flex flex-col gap-2"
          >
            <div className="flex gap-4 items-center">
              <Button variant={variant} size={size} color={color}>
                {`${size.toUpperCase()} Default`}
              </Button>
              <Button variant={variant} size={size} color={color} disabled>
                {`${size.toUpperCase()} Disabled`}
              </Button>
              <Button variant={variant} size={size} color={color} isLoading>
                {`${size.toUpperCase()} Loading`}
              </Button>
            </div>

            <div className="flex gap-4 items-center">
              <Button
                variant={variant}
                size={size}
                color={color}
                iconOnly
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </Button>
              <Button
                variant={variant}
                size={size}
                color={color}
                iconOnly
                disabled
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </Button>
              <Button
                variant={variant}
                size={size}
                color={color}
                iconOnly
                isLoading
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export const PrimaryVariants: Story = {
  render: () => renderVariants('primary'),
  parameters: { controls: { disable: true } },
};

export const SecondaryVariants: Story = {
  render: () => renderVariants('secondary'),
  parameters: { controls: { disable: true } },
};

export const LinkVariants: Story = {
  render: () => renderVariants('link'),
  parameters: { controls: { disable: true } },
};

export const TextLinkVariants: Story = {
  render: () => renderVariants('text-link'),
  parameters: { controls: { disable: true } },
};
