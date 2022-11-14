/** 热门推荐 */
export type backgroundType = {
  color: string
  gradientColor: string | null
  image: string | null
}

export type tagTextType = {
  background: backgroundType
  border: string | null
  color: string
  text: string
  tips: string | null
}

export interface hotSuggestItem {
  aloneLine: boolean
  checkBubble: boolean
  childTags: string | null
  tagCode: number
  tagDesc: string | null
  tagLink: string
  tagText: tagTextType
}

/**分类 */
export interface classifyType {
  adCampaign: boolean
  content: string | null
  id: string
  labels: any[]
  navigateUrl: string
  pictureUrl: string
  pictures: string | null
  redPacketConfig: string | null
  subPictureUrl: string
  subTitle: string
  testBucket: string
  title: string
  videoUrl: string
}
