import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import { Modal } from "./Modal"

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, elit et pellentesque facilisis, eros risus volutpat sapien, id consectetur est dolor nec metus. Nullam ac consectetur risus. Aliquam imperdiet purus ac odio interdum, sit amet dignissim ante aliquam. Vivamus non magna vel sapien euismod congue. Proin suscipit eleifend sapien, vitae tempor nisl hendrerit vel. Duis euismod mollis purus, vel tincidunt lectus bibendum sit amet. Ut a eros mi. Fusce vel ante quam. Integer scelerisque, enim vel cursus consectetur, velit dolor placerat velit, et vestibulum nulla neque vel sapien. Nunc eget ipsum.",
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, elit et pellentesque facilisis, eros risus volutpat sapien, id consectetur est dolor nec metus. Nullam ac consectetur risus. Aliquam imperdiet purus ac odio interdum, sit amet dignissim ante aliquam. Vivamus non magna vel sapien euismod congue. Proin suscipit eleifend sapien, vitae tempor nisl hendrerit vel. Duis euismod mollis purus, vel tincidunt lectus bibendum sit amet. Ut a eros mi. Fusce vel ante quam. Integer scelerisque, enim vel cursus consectetur, velit dolor placerat velit, et vestibulum nulla neque vel sapien. Nunc eget ipsum.",
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
