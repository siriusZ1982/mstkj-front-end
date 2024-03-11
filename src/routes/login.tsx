import * as React from 'react'
import { Button, message } from 'antd'
import { LockOutlined, MobileOutlined } from '@ant-design/icons'
import {
  ProFormCaptcha,
  ProFormText,
  ProForm,
  ProFormInstance,
  PageContainer,
} from '@ant-design/pro-components'

export default function LoginPage() {
  const formRef = React.useRef<ProFormInstance>()

  return (
    <PageContainer
      content={<h1 className="text-2xl text-center">现场面试系统</h1>}
      className="max-w-lg mx-auto"
    >
      <ProForm
        formRef={formRef}
        onFinish={async (values) => {
          console.log('values', values)
        }}
        submitter={{
          render: () => {
            return [
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                className="w-full"
              >
                登录
              </Button>,
            ]
          },
        }}
      >
        <ProFormText
          fieldProps={{
            size: 'large',
            prefix: <MobileOutlined className={'prefixIcon'} />,
          }}
          name="mobile"
          placeholder={'手机号'}
          rules={[
            {
              required: true,
              message: '请输入手机号！',
            },
            {
              pattern: /^1\d{10}$/,
              message: '手机号格式错误！',
            },
          ]}
        />
        <ProFormCaptcha
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={'prefixIcon'} />,
          }}
          captchaProps={{
            size: 'large',
          }}
          placeholder={'请输入验证码'}
          captchaTextRender={(timing, count) => {
            if (timing) {
              return `${count} ${'获取验证码'}`
            }
            return '获取验证码'
          }}
          name="captcha"
          rules={[
            {
              required: true,
              message: '请输入验证码！',
            },
          ]}
          onGetCaptcha={async () => {
            message.success('获取验证码成功！验证码为：1234')
          }}
        />
      </ProForm>
    </PageContainer>
  )
}
