'use client';

import type {
    ProFormColumnsType,
    ProSchemaFieldProps,
} from '@ant-design/pro-components';
import { BetaSchemaForm } from '@ant-design/pro-components';
import {Button, Modal} from "antd";
import {useState} from "react";

const valueEnum = {
    all: { text: '全部', status: 'Default' },
    open: {
        text: '未解决',
        status: 'Error',
    },
    closed: {
        text: '已解决',
        status: 'Success',
        disabled: true,
    },
    processing: {
        text: '解决中',
        status: 'Processing',
    },
};

type DataItem = {
    name: string;
    state: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
    {
        title: '标题',
        dataIndex: 'title',
        formItemProps: {
            rules: [
                {
                    required: true,
                    message: '此项为必填项',
                },
            ],
        },
        width: 'md',
        colProps: {
            xs: 24,
            md: 12,
        },
        initialValue: '默认值',
        convertValue: (value) => {
            return `标题：${value}`;
        },
        transform: (value) => {
            return {
                title: `${value}-转换`,
            };
        },
    },
    {
      title: '状态',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum,
      width: 'md',
      colProps: {
        xs: 24,
        md: 12,
      },
    },
];

const CreatePost: React.FC<ProSchemaFieldProps<any>> = (props) => {
    // const [layoutType, setLayoutType] = useState<ProFormLayoutType>('Form');
    console.log('props', props);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <BetaSchemaForm<DataItem>
                label="布局方式"
                trigger={<Button type="primary">点击我 打开BetaSchemaForm</Button>}
                layoutType="ModalForm"
                onFinish={async (values) => {
                    console.log(values);
                }}
                columns={columns}
            />
            <br/>
            <div>
                <Button  onClick={showModal}>
                    点击我 打开普通Modal
                </Button>
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
export default CreatePost;
