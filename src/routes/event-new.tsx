import * as React from 'react'
import {
  ProFormText,
  ProForm,
  ProFormInstance,
  PageContainer,
  ProFormDigit,
  ProFormSelect,
} from '@ant-design/pro-components'

export default function EventNewPage() {
  const formRef = React.useRef<ProFormInstance>()

  return (
    <PageContainer
      content={<h1 className="text-2xl text-center">新建面试活动</h1>}
      className="max-w-lg mx-auto"
    >
      <ProForm
        formRef={formRef}
        onFinish={async (values) => {
          console.log('values', values)
        }}
      >
        <ProFormText name="title" label="活动名称" />
        <ProFormDigit name="room_number" label="面试间数量" min={1} max={100} />
        <ProFormSelect
          name="duration"
          label="面试时长"
          valueEnum={{
            1800: '30分钟',
            2700: '45分钟',
            3600: '60分钟',
          }}
        />
        <ProFormText name="position" label="面试地点" />
        <ProFormSelect
          name="interviewer"
          label="参与人员"
          valueEnum={{
            id_001: '工作人员001',
            id_002: '工作人员002',
            id_003: '工作人员003',
            id_004: '工作人员004',
            id_005: '工作人员005',
          }}
          fieldProps={{
            mode: 'multiple',
          }}
        />
        <ProFormSelect
          name="evaluation_form"
          label="面试评价表"
          valueEnum={{
            id_001: '评价表001',
            id_002: '评价表002',
            id_003: '评价表003',
            id_004: '评价表004',
            id_005: '评价表005',
          }}
        />
        <ProFormSelect
          name="score_rule"
          label="统分规则"
          valueEnum={{
            0: '平均',
            1: '加权平均',
          }}
        />
      </ProForm>
    </PageContainer>
  )
}
