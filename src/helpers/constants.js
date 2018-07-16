export const DOMAIN = 'https://cofound.it'
export const RatingConst = {
  opinions: {
    INTERESTED: 'I am interested',
    NOT_INTERESTED: 'I am not interested',
    MORE_INFO: 'I need more info',
  },
  phases: {
    ONE: 'How do you feel about the project?',
    TWO: {
      INTERESTED: "What are the project's strong areas?",
      NOT_INTERESTED: "What are the project's weak areas?",
      MORE_INFO: 'What should the project explain better?',
    },
  },
  reasons: {
    INTERESTED: [
      {
        key: 'REASON_1',
        value: 'Team experience',
      },
      {
        key: 'REASON_2',
        value: 'Market size',
      },
      {
        key: 'REASON_3',
        value: 'Supporter benefits',
      },
      {
        key: 'REASON_4',
        value: 'Token model',
      },
      {
        key: 'REASON_5',
        value: 'Project feasibility',
      },
    ],
    NOT_INTERESTED: [
      {
        key: 'REASON_1',
        value: 'Team experience',
      },
      {
        key: 'REASON_2',
        value: 'Market size',
      },
      {
        key: 'REASON_3',
        value: 'Supporter benefits',
      },
      {
        key: 'REASON_4',
        value: 'Token model',
      },
      {
        key: 'REASON_5',
        value: 'Project feasibility',
      },
    ],
    MORE_INFO: [
      {
        key: 'REASON_1',
        value: 'Team experience',
      },
      {
        key: 'REASON_2',
        value: 'Market size',
      },
      {
        key: 'REASON_3',
        value: 'Supporter benefits',
      },
      {
        key: 'REASON_4',
        value: 'Token model',
      },
      {
        key: 'REASON_5',
        value: 'Project feasibility',
      },
    ],
  },
}

/* prettier-ignore */
export const WALLET_TYPES = Object.freeze({
  JAXX: {
    value: 'JAXX',
    label: 'Jaxx',
    url: 'https://jaxx.io',
  },
  LEDGER_NANO_S: {
    value: 'LEDGER_NANO_S',
    label: 'Ledger Nano S',
    url: 'https://www.ledgerwallet.com/apps',
  },
  TREZOR: {
    value: 'TREZOR',
    label: 'TREZOR',
    url: 'https://wallet.trezor.io',
  },
  METAMASK: {
    value: 'METAMASK',
    label: 'MetaMask',
    url: 'https://metamask.io',
  },
  MIST: {
    value: 'MIST',
    label: 'Mist',
    url: 'https://github.com/ethereum/mist/releases',
  },
  PARITY: {
    value: 'PARITY',
    label: 'Parity',
    url: 'https://parity.io',
  },
  MEW: {
    value: 'MEW',
    label: 'MyEtherWallet',
    url: 'https://www.myetherwallet.com',
  },
  OTHER: {
    value: 'OTHER',
    label: 'Other',
    url: null,
  },
})

export const kycConst = {
  verification: {
    DENIED_FRAUD: 'Verification could not be completed with the submitted information',
    DENIED_UNSUPPORTED_ID_TYPE: 'Verification could not be completed with the document you used',
    DENIED_UNSUPPORTED_ID_COUNTRY:
      'Verifications from selected country are not supported by our KYC provider.',
    DENIED_NAME_MISMATCH:
      'Verification could not be completed with the submitted information. Please check the name you entered',
    ERROR_NOT_READABLE_ID: 'Verification could not be completed - the document was not readable.',
    NO_ID_UPLOADED: 'Verification could not be completed - no document data received.',
  },
  // i will same sentence for each error, just in case we will need to change any of them later
  identity: {
    SELFIE_CROPPED_FROM_ID:
      'Verification could not be completed using this image. Please use an colour image with a higher resolution that features only your face.',
    ENTIRE_ID_USED_AS_SELFIE:
      'Verification could not be completed using this image. Please use an colour image with a higher resolution that features only your face.',
    MULTIPLE_PEOPLE:
      'Verification could not be completed using this image. Please use an colour image with a higher resolution that features only your face.',
    SELFIE_IS_SCREEN_PAPER_VIDEO:
      'Verification could not be completed using this image. Please use an colour image with a higher resolution that features only your face.',
    AGE_DIFFERENCE_TOO_BIG:
      'Verification could not be completed using this image. Please use an colour image with a higher resolution that features only your face.',
    NO_FACE_PRESENT:
      'Verification could not be completed using this image. Please use an colour image with a higher resolution that features only your face.',
    FACE_NOT_FULLY_VISIBLE:
      'Verification could not be completed using this image. Please use an colour image with a higher resolution that features only your face.',
    BAD_QUALITY:
      'Verification could not be completed using this image. Please use an colour image with a higher resolution that features only your face.',
    BLACK_AND_WHITE:
      'Verification could not be completed using this image. Please use an colour image with a higher resolution that features only your face.',
    NO_MATCH:
      'Verification could not be completed using this image. Please use an colour image with a higher resolution that features only your face.',
    SELFIE_MANIPULATED:
      'Verification could not be completed using this image. Please use an colour image with a higher resolution that features only your face.',
  },
  generic: 'Verification could not be completed.',
}

export const WALLET_TYPES_ORDER = Object.freeze([
  WALLET_TYPES.JAXX.value,
  WALLET_TYPES.LEDGER_NANO_S.value,
  WALLET_TYPES.TREZOR.value,
  WALLET_TYPES.METAMASK.value,
  WALLET_TYPES.MIST.value,
  WALLET_TYPES.MEW.value,
  WALLET_TYPES.PARITY.value,
  WALLET_TYPES.OTHER.value,
])

export const CROWDSALE_STATE = Object.freeze({
  ANNOUNCED: 'ANNOUNCED',
  START_TIME_ANNOUNCED: 'START_TIME_ANNOUNCED',
  START_TIME_ANNOUNCED_INACTIVE: 'START_TIME_ANNOUNCED_INACTIVE',
  PP_CHECKED: 'PP_CHECKED',
  PP_CHECKED_INACTIVE: 'PP_CHECKED_INACTIVE',
  PRE_SALE_STARTED: 'PRE_SALE_STARTED',
  PRE_SALE_STARTED_INACTIVE: 'PRE_SALE_STARTED_INACTIVE',
  PUBLIC_SALE_STARTED: 'PUBLIC_SALE_STARTED',
  ENDED: 'ENDED',
  UNDEFINED: 'UNDEFINED',
  EXTERNAL: 'EXTERNAL',
})

export const CROWDSALE_STATE_ORDER = [
  CROWDSALE_STATE.ANNOUNCED,
  CROWDSALE_STATE.START_TIME_ANNOUNCED,
  CROWDSALE_STATE.START_TIME_ANNOUNCED_INACTIVE,
  CROWDSALE_STATE.PP_CHECKED,
  CROWDSALE_STATE.PP_CHECKED_INACTIVE,
  CROWDSALE_STATE.PRE_SALE_STARTED,
  CROWDSALE_STATE.PRE_SALE_STARTED_INACTIVE,
  CROWDSALE_STATE.PUBLIC_SALE_STARTED,
  CROWDSALE_STATE.ENDED,
  CROWDSALE_STATE.EXTERNAL,
]

export const CONTRIB_ADDRS = Object.freeze({
  legacy: '0x2495Bd6D0ac7704c55f5eeD01Ae2591a5B53906C',
  unico: '0x615eA80BC073DCA935FB634Ef40Cf8B0166bD94A',
  aversafe: '0x00416B9d728069eDB0cEb04bC2b203fA7336d1F1',
  mediasifter: '0x383670AE601BDc30F15eEE3FAB8b55AbF997D097',
  entx: '0xbf2000B42c1bA2Eb9e5163a0B7e2Fe987eD124b4',
  datafund: '0x08B63cBC9589CcDcaf8c801053E6FA9663331250',
})

export const GAEvents = Object.freeze({
  login_button: {
    category: 'Priority pass',
    action: 'login_button',
    label: 'login',
  },
  signup_button: {
    category: 'Priority pass',
    action: 'signup_button',
    label: 'signup',
  },
  contribute_now_button: {
    category: 'Contribution',
    action: 'contribute_now_button_project',
    label: 'contribute', // + {project slug}
  },
  terms_button: {
    category: 'Contribution',
    action: 'terms_button',
    label: 'terms_agree_next_step', // + {project slug}
  },
  copy_button: {
    category: 'Contribution',
    action: 'copy_button',
    label: 'copy', // + {project slug} & {wallet number}
  },
  copy_via_keyboard: {
    category: 'Contribution',
    action: 'copy_ctrl+C',
    label: 'copy', // + {project slug} & {wallet number}
  },
})

/* Used on the for-teams form & page */
export const TeamRoles = [
  { label: 'Choose role', value: '' },
  { label: 'CEO', value: 'CEO' },
  { label: 'CTO', value: 'CTO' },
  { label: 'CMO', value: 'CMO' },
  { label: 'Community manager', value: 'Community manager' },
  { label: 'Marketing/PR', value: 'Marketing/PR' },
  { label: 'Developer - frontend', value: 'Developer - frontend' },
  { label: 'Developer - backend', value: 'Developer - backend' },
  { label: 'Developer - full stack', value: 'Developer - full stack' },
  { label: 'Developer - blockchain', value: 'Developer - blockchain' },
  { label: 'Design/UX', value: 'Design/UX' },
  { label: 'Industry expert', value: 'Industry expert' },
  { label: 'Legal', value: 'Legal' },
  { label: 'Security expert', value: 'Security expert' },
]

export const AdvisorsRoles = [
  { label: 'Choose advisor role', value: '', disabled: true },
  { label: 'Marketing/PR', value: 'Marketing/PR' },
  { label: 'Technical', value: 'Technical' },
  { label: 'Blockchain', value: 'Blockchain' },
  { label: 'Strategy and business', value: 'Strategy and business' },
  { label: 'ICO advisor', value: 'ICO advisor' },
  { label: 'Industry expert', value: 'Industry expert' },
  { label: 'Legal', value: 'Legal' },
  { label: 'Security expert', value: 'Security expert' },
]

export const StartupMemberRoles = [...TeamRoles, ...AdvisorsRoles]

export const StartupProgressOptions = [
  { label: 'Choose progress', value: '' },
  { label: 'Not Yet', value: 'Not Yet' },
  { label: 'Working on it', value: 'Working on it' },
  { label: 'Draft/not published', value: 'Draft/not published' },
  { label: 'Published', value: 'Published' },
  { label: 'Finalised', value: 'Finalised' },
]

export const InvolvementsOptions = [
  { label: 'Choose involvement', value: '' },
  { label: 'Full-Time', value: 'Full-time' },
  { label: 'Part-time', value: 'Part-time' },
  { label: 'External', value: 'External' },
]

export const FundsTypes = [
  { label: 'Choose type', value: '' },
  { label: 'Equity investment (from VCs or funds)', value: 'Equity investment' },
  { label: 'Token crowdfunding', value: 'Token crowdfunding' },
]

export const IndustryOptions = [
  { label: 'Choose industry', value: '' },
  { label: 'Financial', value: 'Financial' },
  { label: 'Insurance', value: 'Insurance' },
  { label: 'Entertainment and lifestyle', value: 'Entertainment and lifestyle' },
  { label: 'Gaming', value: 'Gamin' },
  { label: 'Media', value: 'Media' },
  { label: 'Education', value: 'Education' },
  { label: 'Real-estate', value: 'Real-estate' },
  { label: 'Healthcare', value: 'Healthcare' },
  { label: 'Government', value: 'Government' },
  { label: 'Non profit', value: 'Non profit' },
  { label: 'Supply chain', value: 'Supply chain' },
  { label: 'Energy', value: 'Energy' },
  { label: 'Business solutions', value: 'Business solutions' },
  { label: 'Retail', value: 'Retail' },
  { label: 'Other', value: 'Other' },
]

export const WhatAreYouBuildingOptions = [
  { label: 'Choose option', value: '' },
  { label: 'Protocol', value: 'Protocol' },
  { label: 'Platform', value: 'Platform' },
  { label: 'Service or application', value: 'Service or application' },
  {
    label: 'Tokenization of existing product or service',
    value: 'Tokenization of existing product or service',
  },
  { label: 'Tokenization', value: 'Tokenization' },
  { label: 'New blockchain', value: 'New blockchain' },
  { label: 'Other', value: 'Other' },
]

export const ProductMaturityOptions = [
  { label: 'Choose maturity', value: '' },
  { label: 'Idea, nothing developed yet', value: 'Idea, nothing developed yet' },
  { label: 'We started development', value: 'We started development' },
  {
    label: 'We have a working prototype, but no users',
    value: 'We have a working prototype, but no users',
  },
  { label: 'We have alpha or beta users', value: 'We have alpha or beta users' },
  { label: 'We have a working product with users', value: 'We have a working product with users' },
]

export const ProjectChallengesOptions = [
  { label: 'Product development', id: 'Product development' },
  { label: 'Security', id: 'Security' },
  { label: 'Community building', id: 'Community building' },
  { label: 'Marketing', id: 'Marketing' },
  { label: 'Team', id: 'Team' },
  { label: 'Blockchain competence', id: 'Blockchain competence' },
  { label: 'Funding', id: 'Funding' },
]

export const ProjectFundingOptions = [
  { label: 'Choose option', value: '' },
  { label: 'Yes, own and from friends and family', value: 'Yes, own and from friends and family' },
  { label: 'Yes, from angel investors', value: 'Yes, from angel investors' },
  { label: 'Yes, from VCs', value: 'Yes, from VCs' },
  { label: 'Yes, from accelerators', value: 'Yes, from accelerators' },
  { label: 'Yes, from token crowdsales', value: 'Yes, from token crowdsales' },
  { label: 'No', value: 'No' },
]

export const TokenModel = [
  { label: 'Choose model', value: '' },
  { label: 'Payments', value: 'Payments' },
  { label: 'Staking to access services or data', value: 'Staking to access services or data' },
  { label: 'Profit or revenue sharing', value: 'Profit or revenue sharing' },
  { label: 'Governance rights', value: 'Governance rights' },
  { label: 'Securing the platform or blockchain', value: 'Securing the platform or blockchain' },
  { label: 'Other', value: 'Other' },
]

export const SocialNetworksOptions = [
  { label: 'Choose', value: '' },
  { label: 'Facebook', value: 'facebook' },
  { label: 'Twitter', value: 'twitter' },
  { label: 'LinkedIn', value: 'linkedIn' },
  { label: 'Medium', value: 'medium' },
]
