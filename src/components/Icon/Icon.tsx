import * as React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faAddressBook,
  faAddressCard,
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faArchive,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faArrowCircleDown,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowsAlt,
  faArrowsAltH,
  faArrowsAltV,
  faAsterisk,
  faBan,
  faBars,
  faBell,
  faBellSlash,
  faBirthdayCake,
  faBolt,
  faBook,
  faBookOpen,
  faBookmark,
  faBox,
  faBoxOpen,
  faBoxes,
  faBriefcase,
  faBuilding,
  faBullhorn,
  faBus,
  faBusAlt,
  faBusinessTime,
  faCalculator,
  faCalendar,
  faCalendarAlt,
  faCalendarCheck,
  faCalendarDay,
  faCalendarMinus,
  faCalendarPlus,
  faCalendarTimes,
  faCalendarWeek,
  faCamera,
  faCar,
  faCarAlt,
  faCarSide,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretSquareDown,
  faCaretSquareLeft,
  faCaretSquareRight,
  faCaretSquareUp,
  faCaretUp,
  faChartArea,
  faChartBar,
  faChartLine,
  faChartPie,
  faCheck,
  faCheckCircle,
  faCheckSquare,
  faChevronCircleDown,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronCircleUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircle,
  faClipboard,
  faClipboardCheck,
  faClipboardList,
  faClock,
  faClone,
  faCloud,
  faCloudDownloadAlt,
  faCloudUploadAlt,
  faCode,
  faCog,
  faCogs,
  faCoins,
  faColumns,
  faComment,
  faCommentAlt,
  faCommentDots,
  faCommentSlash,
  faComments,
  faCompress,
  faCopy,
  faCreditCard,
  faCube,
  faCubes,
  faDatabase,
  faDoorClosed,
  faDoorOpen,
  faEdit,
  faEllipsisH,
  faEllipsisV,
  faEnvelope,
  faEnvelopeOpen,
  faEnvelopeOpenText,
  faExchangeAlt,
  faExclamation,
  faExclamationCircle,
  faExclamationTriangle,
  faExpand,
  faExpandArrowsAlt,
  faExternalLinkAlt,
  faEye,
  faEyeSlash,
  faFile,
  faFileAlt,
  faFileArchive,
  faFileDownload,
  faFileExport,
  faFileImport,
  faFileUpload,
  faFilter,
  faFlag,
  faFolder,
  faFolderMinus,
  faFolderOpen,
  faFolderPlus,
  faFont,
  faForward,
  faGift,
  faGlobe,
  faGraduationCap,
  faGripHorizontal,
  faGripLines,
  faGripLinesVertical,
  faGripVertical,
  faHandPaper,
  faHandPointDown,
  faHandPointLeft,
  faHandPointRight,
  faHandPointUp,
  faHands,
  faHandshake,
  faHeart,
  faHistory,
  faHome,
  faHospital,
  faHospitalAlt,
  faHourglass,
  faHourglassEnd,
  faHourglassHalf,
  faHourglassStart,
  faIdBadge,
  faIdCard,
  faIdCardAlt,
  faImage,
  faImages,
  faInbox,
  faInfo,
  faInfoCircle,
  faKey,
  faKeyboard,
  faLightbulb,
  faLink,
  faList,
  faListAlt,
  faListOl,
  faListUl,
  faLock,
  faLockOpen,
  faLongArrowAltDown,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faLongArrowAltUp,
  faMedkit,
  faMinus,
  faMinusCircle,
  faMinusSquare,
  faMobile,
  faMobileAlt,
  faMoneyBill,
  faMoneyBillAlt,
  faMoneyBillWave,
  faMoneyBillWaveAlt,
  faMoneyCheck,
  faMoneyCheckAlt,
  faPaperPlane,
  faPaperclip,
  faPaste,
  faPen,
  faPencilAlt,
  faPhone,
  faPhoneSlash,
  faPiggyBank,
  faPlane,
  faPlay,
  faPlayCircle,
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faPoll,
  faPollH,
  faPortrait,
  faPowerOff,
  faPrint,
  faQrcode,
  faQuestion,
  faQuestionCircle,
  faRandom,
  faReceipt,
  faRedo,
  faRedoAlt,
  // faRegDotCircle,
  faReply,
  faReplyAll,
  faRocket,
  faSave,
  faSearch,
  faSearchMinus,
  faSearchPlus,
  faShare,
  faShareAlt,
  faShareSquare,
  faShieldAlt,
  faShoppingBag,
  faShoppingBasket,
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
  faSlidersH,
  faSort,
  faSortAlphaDown,
  faSortAlphaUp,
  faSortAmountDown,
  faSortAmountUp,
  faSortDown,
  faSortNumericDown,
  faSortNumericUp,
  faSortUp,
  faStar,
  faStepBackward,
  faStepForward,
  faStickyNote,
  faStop,
  faStopCircle,
  faStream,
  faSubway,
  faSync,
  faSyncAlt,
  faTable,
  faTablet,
  faTabletAlt,
  faTachometerAlt,
  faTag,
  faTags,
  faTasks,
  faTaxi,
  faTh,
  faThLarge,
  faThList,
  faTimes,
  faTimesCircle,
  faToolbox,
  faTools,
  faTrash,
  faTrashAlt,
  faTrashRestore,
  faTrashRestoreAlt,
  faUndo,
  faUndoAlt,
  faUnlink,
  faUnlock,
  faUnlockAlt,
  faUser,
  faUserAlt,
  faUserAltSlash,
  faUserCheck,
  faUserCircle,
  faUserClock,
  faUserCog,
  faUserEdit,
  faUserMinus,
  faUserPlus,
  faUserSlash,
  faUsers,
  faUsersCog,
  faVideo,
  faVideoSlash,
  faVolumeDown,
  faVolumeMute,
  faVolumeOff,
  faVolumeUp,
  faWallet,
  faWindowClose,
  faWindowMaximize,
  faWindowMinimize,
  faWindowRestore,
  faWrench,
  faYenSign,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from 'styled-components'
import { VISUALLY_HIDDEN_STYLE } from '../../constants'
import { useTheme } from '../../hooks/useTheme'
import { useClassNames } from './useClassNames'

/**
 * literal union type に補完を効かせるためのハック
 * https://github.com/microsoft/TypeScript/issues/29729
 */
type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>)

const definedColors = [
  'TEXT_BLACK',
  'TEXT_WHITE',
  'TEXT_GREY',
  'TEXT_DISABLED',
  'TEXT_LINK',
  'MAIN',
  'DANGER',
  'WARNING',
  'BRAND',
] as const
type DefinedColor = typeof definedColors[number]

const knownColorSet: Set<string> = new Set(definedColors)
function isDefinedColor(color: string): color is DefinedColor {
  return knownColorSet.has(color)
}

export interface IconProps {
  /**
   * Color of Icon.
   * @type string | 'TEXT_BLACK' | 'TEXT_GREY' | 'TEXT_DISABLED' | 'TEXT_LINK' | 'MAIN' | 'DANGER' | 'WARNING' | 'BRAND'
   */
  color?: LiteralUnion<DefinedColor>
  /**
   * Size of icon.
   */
  size?: number
}

type ElementProps = Omit<React.SVGAttributes<SVGAElement>, keyof IconProps>

export interface ComponentProps extends IconProps, ElementProps {
  /**
   * The text that is not displayed but exists in DOM for accessibility purposes.
   */
  visuallyHiddenText?: string
  /**
   * `className` of component.
   */
  className?: string
}

export const createIcon = (icon: IconDefinition) => {
  const Icon: React.VFC<ComponentProps> = ({
    color,
    className = '',
    role = 'img',
    visuallyHiddenText,
    'aria-hidden': ariaHidden,
    focusable = false,
    ...props
  }) => {
    const hasLabelByAria =
      props['aria-label'] !== undefined || props['aria-labelledby'] !== undefined
    const isAriaHidden = ariaHidden !== undefined ? ariaHidden : !hasLabelByAria

    const theme = useTheme()
    const replacedColor = React.useMemo(() => {
      const asserted = color as string | undefined
      if (asserted && isDefinedColor(asserted)) {
        return theme.color[asserted]
      }
      return color
    }, [color, theme.color])

    const classNames = useClassNames()

    return (
      <>
        {visuallyHiddenText && <VisuallyHiddenText>{visuallyHiddenText}</VisuallyHiddenText>}
        <FontAwesomeIcon
          icon={icon}
          color={replacedColor}
          className={`${className} ${classNames.wrapper}`}
          role={role}
          aria-hidden={isAriaHidden || visuallyHiddenText !== undefined || undefined}
          focusable={focusable}
          // {...props}
        />
      </>
    )
  }
  return Icon
}

const VisuallyHiddenText = styled.span`
  ${VISUALLY_HIDDEN_STYLE}
`

export const FaAddressBookIcon = /*#__PURE__*/ createIcon(faAddressBook)
export const FaAddressCardIcon = /*#__PURE__*/ createIcon(faAddressCard)
export const FaAngleDoubleDownIcon = /*#__PURE__*/ createIcon(faAngleDoubleDown)
export const FaAngleDoubleLeftIcon = /*#__PURE__*/ createIcon(faAngleDoubleLeft)
export const FaAngleDoubleRightIcon = /*#__PURE__*/ createIcon(faAngleDoubleRight)
export const FaAngleDownIcon = /*#__PURE__*/ createIcon(faAngleDown)
export const FaAngleLeftIcon = /*#__PURE__*/ createIcon(faAngleLeft)
export const FaAngleRightIcon = /*#__PURE__*/ createIcon(faAngleRight)
export const FaAngleUpIcon = /*#__PURE__*/ createIcon(faAngleUp)
export const FaArchiveIcon = /*#__PURE__*/ createIcon(faArchive)
export const FaArrowCircleDownIcon = /*#__PURE__*/ createIcon(faArrowCircleDown)
export const FaArrowAltCircleDownIcon = /*#__PURE__*/ createIcon(faArrowAltCircleDown)
export const FaArrowAltCircleLeftIcon = /*#__PURE__*/ createIcon(faArrowAltCircleLeft)
export const FaArrowAltCircleRightIcon = /*#__PURE__*/ createIcon(faArrowAltCircleRight)
export const FaArrowAltCircleUpIcon = /*#__PURE__*/ createIcon(faArrowAltCircleUp)
export const FaArrowDownIcon = /*#__PURE__*/ createIcon(faArrowDown)
export const FaArrowLeftIcon = /*#__PURE__*/ createIcon(faArrowLeft)
export const FaArrowRightIcon = /*#__PURE__*/ createIcon(faArrowRight)
export const FaArrowUpIcon = /*#__PURE__*/ createIcon(faArrowUp)
export const FaArrowsAltIcon = /*#__PURE__*/ createIcon(faArrowsAlt)
export const FaArrowsAltHIcon = /*#__PURE__*/ createIcon(faArrowsAltH)
export const FaArrowsAltVIcon = /*#__PURE__*/ createIcon(faArrowsAltV)
export const FaAsteriskIcon = /*#__PURE__*/ createIcon(faAsterisk)
export const FaBanIcon = /*#__PURE__*/ createIcon(faBan)
export const FaBarsIcon = /*#__PURE__*/ createIcon(faBars)
export const FaBellIcon = /*#__PURE__*/ createIcon(faBell)
export const FaBellSlashIcon = /*#__PURE__*/ createIcon(faBellSlash)
export const FaBirthdayCakeIcon = /*#__PURE__*/ createIcon(faBirthdayCake)
export const FaBoltIcon = /*#__PURE__*/ createIcon(faBolt)
export const FaBookIcon = /*#__PURE__*/ createIcon(faBook)
export const FaBookOpenIcon = /*#__PURE__*/ createIcon(faBookOpen)
export const FaBookmarkIcon = /*#__PURE__*/ createIcon(faBookmark)
export const FaBoxIcon = /*#__PURE__*/ createIcon(faBox)
export const FaBoxOpenIcon = /*#__PURE__*/ createIcon(faBoxOpen)
export const FaBoxesIcon = /*#__PURE__*/ createIcon(faBoxes)
export const FaBriefcaseIcon = /*#__PURE__*/ createIcon(faBriefcase)
export const FaBuildingIcon = /*#__PURE__*/ createIcon(faBuilding)
export const FaBullhornIcon = /*#__PURE__*/ createIcon(faBullhorn)
export const FaBusIcon = /*#__PURE__*/ createIcon(faBus)
export const FaBusAltIcon = /*#__PURE__*/ createIcon(faBusAlt)
export const FaBusinessTimeIcon = /*#__PURE__*/ createIcon(faBusinessTime)
export const FaCalculatorIcon = /*#__PURE__*/ createIcon(faCalculator)
export const FaCalendarIcon = /*#__PURE__*/ createIcon(faCalendar)
export const FaCalendarAltIcon = /*#__PURE__*/ createIcon(faCalendarAlt)
export const FaCalendarCheckIcon = /*#__PURE__*/ createIcon(faCalendarCheck)
export const FaCalendarDayIcon = /*#__PURE__*/ createIcon(faCalendarDay)
export const FaCalendarMinusIcon = /*#__PURE__*/ createIcon(faCalendarMinus)
export const FaCalendarPlusIcon = /*#__PURE__*/ createIcon(faCalendarPlus)
export const FaCalendarTimesIcon = /*#__PURE__*/ createIcon(faCalendarTimes)
export const FaCalendarWeekIcon = /*#__PURE__*/ createIcon(faCalendarWeek)
export const FaCameraIcon = /*#__PURE__*/ createIcon(faCamera)
export const FaCarIcon = /*#__PURE__*/ createIcon(faCar)
export const FaCarAltIcon = /*#__PURE__*/ createIcon(faCarAlt)
export const FaCarSideIcon = /*#__PURE__*/ createIcon(faCarSide)
export const FaCaretDownIcon = /*#__PURE__*/ createIcon(faCaretDown)
export const FaCaretLeftIcon = /*#__PURE__*/ createIcon(faCaretLeft)
export const FaCaretRightIcon = /*#__PURE__*/ createIcon(faCaretRight)
export const FaCaretSquareDownIcon = /*#__PURE__*/ createIcon(faCaretSquareDown)
export const FaCaretSquareLeftIcon = /*#__PURE__*/ createIcon(faCaretSquareLeft)
export const FaCaretSquareRightIcon = /*#__PURE__*/ createIcon(faCaretSquareRight)
export const FaCaretSquareUpIcon = /*#__PURE__*/ createIcon(faCaretSquareUp)
export const FaCaretUpIcon = /*#__PURE__*/ createIcon(faCaretUp)
export const FaChartAreaIcon = /*#__PURE__*/ createIcon(faChartArea)
export const FaChartBarIcon = /*#__PURE__*/ createIcon(faChartBar)
export const FaChartLineIcon = /*#__PURE__*/ createIcon(faChartLine)
export const FaChartPieIcon = /*#__PURE__*/ createIcon(faChartPie)
export const FaCheckIcon = /*#__PURE__*/ createIcon(faCheck)
export const FaCheckCircleIcon = /*#__PURE__*/ createIcon(faCheckCircle)
export const FaCheckSquareIcon = /*#__PURE__*/ createIcon(faCheckSquare)
export const FaChevronCircleDownIcon = /*#__PURE__*/ createIcon(faChevronCircleDown)
export const FaChevronCircleLeftIcon = /*#__PURE__*/ createIcon(faChevronCircleLeft)
export const FaChevronCircleRightIcon = /*#__PURE__*/ createIcon(faChevronCircleRight)
export const FaChevronCircleUpIcon = /*#__PURE__*/ createIcon(faChevronCircleUp)
export const FaChevronDownIcon = /*#__PURE__*/ createIcon(faChevronDown)
export const FaChevronLeftIcon = /*#__PURE__*/ createIcon(faChevronLeft)
export const FaChevronRightIcon = /*#__PURE__*/ createIcon(faChevronRight)
export const FaChevronUpIcon = /*#__PURE__*/ createIcon(faChevronUp)
export const FaCircleIcon = /*#__PURE__*/ createIcon(faCircle)
export const FaClipboardIcon = /*#__PURE__*/ createIcon(faClipboard)
export const FaClipboardCheckIcon = /*#__PURE__*/ createIcon(faClipboardCheck)
export const FaClipboardListIcon = /*#__PURE__*/ createIcon(faClipboardList)
export const FaClockIcon = /*#__PURE__*/ createIcon(faClock)
export const FaCloneIcon = /*#__PURE__*/ createIcon(faClone)
export const FaCloudIcon = /*#__PURE__*/ createIcon(faCloud)
export const FaCloudDownloadAltIcon = /*#__PURE__*/ createIcon(faCloudDownloadAlt)
export const FaCloudUploadAltIcon = /*#__PURE__*/ createIcon(faCloudUploadAlt)
export const FaCodeIcon = /*#__PURE__*/ createIcon(faCode)
export const FaCogIcon = /*#__PURE__*/ createIcon(faCog)
export const FaCogsIcon = /*#__PURE__*/ createIcon(faCogs)
export const FaCoinsIcon = /*#__PURE__*/ createIcon(faCoins)
export const FaColumnsIcon = /*#__PURE__*/ createIcon(faColumns)
export const FaCommentIcon = /*#__PURE__*/ createIcon(faComment)
export const FaCommentAltIcon = /*#__PURE__*/ createIcon(faCommentAlt)
export const FaCommentDotsIcon = /*#__PURE__*/ createIcon(faCommentDots)
export const FaCommentSlashIcon = /*#__PURE__*/ createIcon(faCommentSlash)
export const FaCommentsIcon = /*#__PURE__*/ createIcon(faComments)
export const FaCompressIcon = /*#__PURE__*/ createIcon(faCompress)
export const FaCopyIcon = /*#__PURE__*/ createIcon(faCopy)
export const FaCreditCardIcon = /*#__PURE__*/ createIcon(faCreditCard)
export const FaCubeIcon = /*#__PURE__*/ createIcon(faCube)
export const FaCubesIcon = /*#__PURE__*/ createIcon(faCubes)
export const FaDatabaseIcon = /*#__PURE__*/ createIcon(faDatabase)
export const FaDoorClosedIcon = /*#__PURE__*/ createIcon(faDoorClosed)
export const FaDoorOpenIcon = /*#__PURE__*/ createIcon(faDoorOpen)
export const FaEditIcon = /*#__PURE__*/ createIcon(faEdit)
export const FaEllipsisHIcon = /*#__PURE__*/ createIcon(faEllipsisH)
export const FaEllipsisVIcon = /*#__PURE__*/ createIcon(faEllipsisV)
export const FaEnvelopeIcon = /*#__PURE__*/ createIcon(faEnvelope)
export const FaEnvelopeOpenIcon = /*#__PURE__*/ createIcon(faEnvelopeOpen)
export const FaEnvelopeOpenTextIcon = /*#__PURE__*/ createIcon(faEnvelopeOpenText)
export const FaExchangeAltIcon = /*#__PURE__*/ createIcon(faExchangeAlt)
export const FaExclamationIcon = /*#__PURE__*/ createIcon(faExclamation)
export const FaExclamationCircleIcon = /*#__PURE__*/ createIcon(faExclamationCircle)
export const FaExclamationTriangleIcon = /*#__PURE__*/ createIcon(faExclamationTriangle)
export const FaExpandIcon = /*#__PURE__*/ createIcon(faExpand)
export const FaExpandArrowsAltIcon = /*#__PURE__*/ createIcon(faExpandArrowsAlt)
export const FaExternalLinkAltIcon = /*#__PURE__*/ createIcon(faExternalLinkAlt)
export const FaEyeIcon = /*#__PURE__*/ createIcon(faEye)
export const FaEyeSlashIcon = /*#__PURE__*/ createIcon(faEyeSlash)
export const FaFileIcon = /*#__PURE__*/ createIcon(faFile)
export const FaFileAltIcon = /*#__PURE__*/ createIcon(faFileAlt)
export const FaFileArchiveIcon = /*#__PURE__*/ createIcon(faFileArchive)
export const FaFileDownloadIcon = /*#__PURE__*/ createIcon(faFileDownload)
export const FaFileExportIcon = /*#__PURE__*/ createIcon(faFileExport)
export const FaFileImportIcon = /*#__PURE__*/ createIcon(faFileImport)
export const FaFileUploadIcon = /*#__PURE__*/ createIcon(faFileUpload)
export const FaFilterIcon = /*#__PURE__*/ createIcon(faFilter)
export const FaFlagIcon = /*#__PURE__*/ createIcon(faFlag)
export const FaFolderIcon = /*#__PURE__*/ createIcon(faFolder)
export const FaFolderMinusIcon = /*#__PURE__*/ createIcon(faFolderMinus)
export const FaFolderOpenIcon = /*#__PURE__*/ createIcon(faFolderOpen)
export const FaFolderPlusIcon = /*#__PURE__*/ createIcon(faFolderPlus)
export const FaFontIcon = /*#__PURE__*/ createIcon(faFont)
export const FaForwardIcon = /*#__PURE__*/ createIcon(faForward)
export const FaGiftIcon = /*#__PURE__*/ createIcon(faGift)
export const FaGlobeIcon = /*#__PURE__*/ createIcon(faGlobe)
export const FaGraduationCapIcon = /*#__PURE__*/ createIcon(faGraduationCap)
export const FaGripHorizontalIcon = /*#__PURE__*/ createIcon(faGripHorizontal)
export const FaGripLinesIcon = /*#__PURE__*/ createIcon(faGripLines)
export const FaGripLinesVerticalIcon = /*#__PURE__*/ createIcon(faGripLinesVertical)
export const FaGripVerticalIcon = /*#__PURE__*/ createIcon(faGripVertical)
export const FaHandPaperIcon = /*#__PURE__*/ createIcon(faHandPaper)
export const FaHandPointDownIcon = /*#__PURE__*/ createIcon(faHandPointDown)
export const FaHandPointLeftIcon = /*#__PURE__*/ createIcon(faHandPointLeft)
export const FaHandPointRightIcon = /*#__PURE__*/ createIcon(faHandPointRight)
export const FaHandPointUpIcon = /*#__PURE__*/ createIcon(faHandPointUp)
export const FaHandsIcon = /*#__PURE__*/ createIcon(faHands)
export const FaHandshakeIcon = /*#__PURE__*/ createIcon(faHandshake)
export const FaHeartIcon = /*#__PURE__*/ createIcon(faHeart)
export const FaHistoryIcon = /*#__PURE__*/ createIcon(faHistory)
export const FaHomeIcon = /*#__PURE__*/ createIcon(faHome)
export const FaHospitalIcon = /*#__PURE__*/ createIcon(faHospital)
export const FaHospitalAltIcon = /*#__PURE__*/ createIcon(faHospitalAlt)
export const FaHourglassIcon = /*#__PURE__*/ createIcon(faHourglass)
export const FaHourglassEndIcon = /*#__PURE__*/ createIcon(faHourglassEnd)
export const FaHourglassHalfIcon = /*#__PURE__*/ createIcon(faHourglassHalf)
export const FaHourglassStartIcon = /*#__PURE__*/ createIcon(faHourglassStart)
export const FaIdBadgeIcon = /*#__PURE__*/ createIcon(faIdBadge)
export const FaIdCardIcon = /*#__PURE__*/ createIcon(faIdCard)
export const FaIdCardAltIcon = /*#__PURE__*/ createIcon(faIdCardAlt)
export const FaImageIcon = /*#__PURE__*/ createIcon(faImage)
export const FaImagesIcon = /*#__PURE__*/ createIcon(faImages)
export const FaInboxIcon = /*#__PURE__*/ createIcon(faInbox)
export const FaInfoIcon = /*#__PURE__*/ createIcon(faInfo)
export const FaInfoCircleIcon = /*#__PURE__*/ createIcon(faInfoCircle)
export const FaKeyIcon = /*#__PURE__*/ createIcon(faKey)
export const FaKeyboardIcon = /*#__PURE__*/ createIcon(faKeyboard)
export const FaLightbulbIcon = /*#__PURE__*/ createIcon(faLightbulb)
export const FaLinkIcon = /*#__PURE__*/ createIcon(faLink)
export const FaListIcon = /*#__PURE__*/ createIcon(faList)
export const FaListAltIcon = /*#__PURE__*/ createIcon(faListAlt)
export const FaListOlIcon = /*#__PURE__*/ createIcon(faListOl)
export const FaListUlIcon = /*#__PURE__*/ createIcon(faListUl)
export const FaLockIcon = /*#__PURE__*/ createIcon(faLock)
export const FaLockOpenIcon = /*#__PURE__*/ createIcon(faLockOpen)
export const FaLongArrowAltDownIcon = /*#__PURE__*/ createIcon(faLongArrowAltDown)
export const FaLongArrowAltLeftIcon = /*#__PURE__*/ createIcon(faLongArrowAltLeft)
export const FaLongArrowAltRightIcon = /*#__PURE__*/ createIcon(faLongArrowAltRight)
export const FaLongArrowAltUpIcon = /*#__PURE__*/ createIcon(faLongArrowAltUp)
export const FaMedkitIcon = /*#__PURE__*/ createIcon(faMedkit)
export const FaMinusIcon = /*#__PURE__*/ createIcon(faMinus)
export const FaMinusCircleIcon = /*#__PURE__*/ createIcon(faMinusCircle)
export const FaMinusSquareIcon = /*#__PURE__*/ createIcon(faMinusSquare)
export const FaMobileIcon = /*#__PURE__*/ createIcon(faMobile)
export const FaMobileAltIcon = /*#__PURE__*/ createIcon(faMobileAlt)
export const FaMoneyBillIcon = /*#__PURE__*/ createIcon(faMoneyBill)
export const FaMoneyBillAltIcon = /*#__PURE__*/ createIcon(faMoneyBillAlt)
export const FaMoneyBillWaveIcon = /*#__PURE__*/ createIcon(faMoneyBillWave)
export const FaMoneyBillWaveAltIcon = /*#__PURE__*/ createIcon(faMoneyBillWaveAlt)
export const FaMoneyCheckIcon = /*#__PURE__*/ createIcon(faMoneyCheck)
export const FaMoneyCheckAltIcon = /*#__PURE__*/ createIcon(faMoneyCheckAlt)
export const FaPaperPlaneIcon = /*#__PURE__*/ createIcon(faPaperPlane)
export const FaPaperclipIcon = /*#__PURE__*/ createIcon(faPaperclip)
export const FaPasteIcon = /*#__PURE__*/ createIcon(faPaste)
export const FaPenIcon = /*#__PURE__*/ createIcon(faPen)
export const FaPencilAltIcon = /*#__PURE__*/ createIcon(faPencilAlt)
export const FaPhoneIcon = /*#__PURE__*/ createIcon(faPhone)
export const FaPhoneSlashIcon = /*#__PURE__*/ createIcon(faPhoneSlash)
export const FaPiggyBankIcon = /*#__PURE__*/ createIcon(faPiggyBank)
export const FaPlaneIcon = /*#__PURE__*/ createIcon(faPlane)
export const FaPlayIcon = /*#__PURE__*/ createIcon(faPlay)
export const FaPlayCircleIcon = /*#__PURE__*/ createIcon(faPlayCircle)
export const FaPlusIcon = /*#__PURE__*/ createIcon(faPlus)
export const FaPlusCircleIcon = /*#__PURE__*/ createIcon(faPlusCircle)
export const FaPlusSquareIcon = /*#__PURE__*/ createIcon(faPlusSquare)
export const FaPollIcon = /*#__PURE__*/ createIcon(faPoll)
export const FaPollHIcon = /*#__PURE__*/ createIcon(faPollH)
export const FaPortraitIcon = /*#__PURE__*/ createIcon(faPortrait)
export const FaPowerOffIcon = /*#__PURE__*/ createIcon(faPowerOff)
export const FaPrintIcon = /*#__PURE__*/ createIcon(faPrint)
export const FaQrcodeIcon = /*#__PURE__*/ createIcon(faQrcode)
export const FaQuestionIcon = /*#__PURE__*/ createIcon(faQuestion)
export const FaQuestionCircleIcon = /*#__PURE__*/ createIcon(faQuestionCircle)
export const FaRandomIcon = /*#__PURE__*/ createIcon(faRandom)
export const FaReceiptIcon = /*#__PURE__*/ createIcon(faReceipt)
export const FaRedoIcon = /*#__PURE__*/ createIcon(faRedo)
export const FaRedoAltIcon = /*#__PURE__*/ createIcon(faRedoAlt)
// export const FaRegDotCircleIcon = /*#__PURE__*/ createIcon(faRegDotCircle)
export const FaReplyIcon = /*#__PURE__*/ createIcon(faReply)
export const FaReplyAllIcon = /*#__PURE__*/ createIcon(faReplyAll)
export const FaRocketIcon = /*#__PURE__*/ createIcon(faRocket)
export const FaSaveIcon = /*#__PURE__*/ createIcon(faSave)
export const FaSearchIcon = /*#__PURE__*/ createIcon(faSearch)
export const FaSearchMinusIcon = /*#__PURE__*/ createIcon(faSearchMinus)
export const FaSearchPlusIcon = /*#__PURE__*/ createIcon(faSearchPlus)
export const FaShareIcon = /*#__PURE__*/ createIcon(faShare)
export const FaShareAltIcon = /*#__PURE__*/ createIcon(faShareAlt)
export const FaShareSquareIcon = /*#__PURE__*/ createIcon(faShareSquare)
export const FaShieldAltIcon = /*#__PURE__*/ createIcon(faShieldAlt)
export const FaShoppingBagIcon = /*#__PURE__*/ createIcon(faShoppingBag)
export const FaShoppingBasketIcon = /*#__PURE__*/ createIcon(faShoppingBasket)
export const FaShoppingCartIcon = /*#__PURE__*/ createIcon(faShoppingCart)
export const FaSignInAltIcon = /*#__PURE__*/ createIcon(faSignInAlt)
export const FaSignOutAltIcon = /*#__PURE__*/ createIcon(faSignOutAlt)
export const FaSlidersHIcon = /*#__PURE__*/ createIcon(faSlidersH)
export const FaSortIcon = /*#__PURE__*/ createIcon(faSort)
export const FaSortAlphaDownIcon = /*#__PURE__*/ createIcon(faSortAlphaDown)
export const FaSortAlphaUpIcon = /*#__PURE__*/ createIcon(faSortAlphaUp)
export const FaSortAmountDownIcon = /*#__PURE__*/ createIcon(faSortAmountDown)
export const FaSortAmountUpIcon = /*#__PURE__*/ createIcon(faSortAmountUp)
export const FaSortDownIcon = /*#__PURE__*/ createIcon(faSortDown)
export const FaSortNumericDownIcon = /*#__PURE__*/ createIcon(faSortNumericDown)
export const FaSortNumericUpIcon = /*#__PURE__*/ createIcon(faSortNumericUp)
export const FaSortUpIcon = /*#__PURE__*/ createIcon(faSortUp)
export const FaStarIcon = /*#__PURE__*/ createIcon(faStar)
export const FaStepBackwardIcon = /*#__PURE__*/ createIcon(faStepBackward)
export const FaStepForwardIcon = /*#__PURE__*/ createIcon(faStepForward)
export const FaStickyNoteIcon = /*#__PURE__*/ createIcon(faStickyNote)
export const FaStopIcon = /*#__PURE__*/ createIcon(faStop)
export const FaStopCircleIcon = /*#__PURE__*/ createIcon(faStopCircle)
export const FaStreamIcon = /*#__PURE__*/ createIcon(faStream)
export const FaSubwayIcon = /*#__PURE__*/ createIcon(faSubway)
export const FaSyncIcon = /*#__PURE__*/ createIcon(faSync)
export const FaSyncAltIcon = /*#__PURE__*/ createIcon(faSyncAlt)
export const FaTableIcon = /*#__PURE__*/ createIcon(faTable)
export const FaTabletIcon = /*#__PURE__*/ createIcon(faTablet)
export const FaTabletAltIcon = /*#__PURE__*/ createIcon(faTabletAlt)
export const FaTachometerAltIcon = /*#__PURE__*/ createIcon(faTachometerAlt)
export const FaTagIcon = /*#__PURE__*/ createIcon(faTag)
export const FaTagsIcon = /*#__PURE__*/ createIcon(faTags)
export const FaTasksIcon = /*#__PURE__*/ createIcon(faTasks)
export const FaTaxiIcon = /*#__PURE__*/ createIcon(faTaxi)
export const FaThIcon = /*#__PURE__*/ createIcon(faTh)
export const FaThLargeIcon = /*#__PURE__*/ createIcon(faThLarge)
export const FaThListIcon = /*#__PURE__*/ createIcon(faThList)
export const FaTimesIcon = /*#__PURE__*/ createIcon(faTimes)
export const FaTimesCircleIcon = /*#__PURE__*/ createIcon(faTimesCircle)
export const FaToolboxIcon = /*#__PURE__*/ createIcon(faToolbox)
export const FaToolsIcon = /*#__PURE__*/ createIcon(faTools)
export const FaTrashIcon = /*#__PURE__*/ createIcon(faTrash)
export const FaTrashAltIcon = /*#__PURE__*/ createIcon(faTrashAlt)
export const FaTrashRestoreIcon = /*#__PURE__*/ createIcon(faTrashRestore)
export const FaTrashRestoreAltIcon = /*#__PURE__*/ createIcon(faTrashRestoreAlt)
export const FaUndoIcon = /*#__PURE__*/ createIcon(faUndo)
export const FaUndoAltIcon = /*#__PURE__*/ createIcon(faUndoAlt)
export const FaUnlinkIcon = /*#__PURE__*/ createIcon(faUnlink)
export const FaUnlockIcon = /*#__PURE__*/ createIcon(faUnlock)
export const FaUnlockAltIcon = /*#__PURE__*/ createIcon(faUnlockAlt)
export const FaUserIcon = /*#__PURE__*/ createIcon(faUser)
export const FaUserAltIcon = /*#__PURE__*/ createIcon(faUserAlt)
export const FaUserAltSlashIcon = /*#__PURE__*/ createIcon(faUserAltSlash)
export const FaUserCheckIcon = /*#__PURE__*/ createIcon(faUserCheck)
export const FaUserCircleIcon = /*#__PURE__*/ createIcon(faUserCircle)
export const FaUserClockIcon = /*#__PURE__*/ createIcon(faUserClock)
export const FaUserCogIcon = /*#__PURE__*/ createIcon(faUserCog)
export const FaUserEditIcon = /*#__PURE__*/ createIcon(faUserEdit)
export const FaUserMinusIcon = /*#__PURE__*/ createIcon(faUserMinus)
export const FaUserPlusIcon = /*#__PURE__*/ createIcon(faUserPlus)
export const FaUserSlashIcon = /*#__PURE__*/ createIcon(faUserSlash)
export const FaUsersIcon = /*#__PURE__*/ createIcon(faUsers)
export const FaUsersCogIcon = /*#__PURE__*/ createIcon(faUsersCog)
export const FaVideoIcon = /*#__PURE__*/ createIcon(faVideo)
export const FaVideoSlashIcon = /*#__PURE__*/ createIcon(faVideoSlash)
export const FaVolumeDownIcon = /*#__PURE__*/ createIcon(faVolumeDown)
export const FaVolumeMuteIcon = /*#__PURE__*/ createIcon(faVolumeMute)
export const FaVolumeOffIcon = /*#__PURE__*/ createIcon(faVolumeOff)
export const FaVolumeUpIcon = /*#__PURE__*/ createIcon(faVolumeUp)
export const FaWalletIcon = /*#__PURE__*/ createIcon(faWallet)
export const FaWindowCloseIcon = /*#__PURE__*/ createIcon(faWindowClose)
export const FaWindowMaximizeIcon = /*#__PURE__*/ createIcon(faWindowMaximize)
export const FaWindowMinimizeIcon = /*#__PURE__*/ createIcon(faWindowMinimize)
export const FaWindowRestoreIcon = /*#__PURE__*/ createIcon(faWindowRestore)
export const FaWrenchIcon = /*#__PURE__*/ createIcon(faWrench)
export const FaYenSignIcon = /*#__PURE__*/ createIcon(faYenSign)
