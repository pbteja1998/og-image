import { ParsedRequest, FileType } from '../api/_lib/types'
const { H, R, copee } = window as any
let timeout = -1

interface ImagePreviewProps {
  src: string
  onclick: () => void
  onload: () => void
  onerror: () => void
  loading: boolean
}

const ImagePreview = ({
  src,
  onclick,
  onload,
  onerror,
  loading,
}: ImagePreviewProps) => {
  const style = {
    filter: loading ? 'blur(5px)' : '',
    opacity: loading ? 0.1 : 1,
  }
  const title = 'Click to copy image URL to clipboard'
  return H(
    'a',
    { className: 'image-wrapper', href: src, onclick },
    H('img', { src, onload, onerror, style, title })
  )
}

interface DropdownOption {
  text: string
  value: string
}

interface DropdownProps {
  options: DropdownOption[]
  value: string
  onchange: (val: string) => void
  small: boolean
}

interface TextInputProps {
  value: string
  oninput: (val: string) => void
}

const TextInput = ({ value, oninput }: TextInputProps) => {
  return H(
    'div',
    { className: 'input-outer-wrapper' },
    H(
      'div',
      { className: 'input-inner-wrapper' },
      H('input', {
        type: 'text',
        value,
        oninput: (e: any) => oninput(e.target.value),
      })
    )
  )
}

const Dropdown = ({ options, value, onchange, small }: DropdownProps) => {
  const wrapper = small ? 'select-wrapper small' : 'select-wrapper'
  const arrow = small ? 'select-arrow small' : 'select-arrow'
  return H(
    'div',
    { className: wrapper },
    H(
      'select',
      { onchange: (e: any) => onchange(e.target.value) },
      options.map((o) =>
        H('option', { value: o.value, selected: value === o.value }, o.text)
      )
    ),
    H('div', { className: arrow }, '▼')
  )
}

interface FieldProps {
  label: string
  input: any
}

const Field = ({ label, input }: FieldProps) => {
  return H(
    'div',
    { className: 'field' },
    H(
      'label',
      H('div', { className: 'field-label' }, label),
      H('div', { className: 'field-value' }, input)
    )
  )
}

interface ToastProps {
  show: boolean
  message: string
}

const Toast = ({ show, message }: ToastProps) => {
  const style = { transform: show ? 'translate3d(0,-0px,-0px) scale(1)' : '' }
  return H(
    'div',
    { className: 'toast-area' },
    H(
      'div',
      { className: 'toast-outer', style },
      H(
        'div',
        { className: 'toast-inner' },
        H('div', { className: 'toast-message' }, message)
      )
    )
  )
}

const fileTypeOptions: DropdownOption[] = [
  { text: 'PNG', value: 'png' },
  { text: 'JPEG', value: 'jpeg' },
]

interface AppState extends ParsedRequest {
  loading: boolean
  showToast: boolean
  messageToast: string
  selectedImageIndex: number
  widths: string[]
  heights: string[]
  overrideUrl: URL | null
}

type SetState = (state: Partial<AppState>) => void

const App = (_: any, state: AppState, setState: SetState) => {
  const setLoadingState = (newState: Partial<AppState>) => {
    window.clearTimeout(timeout)
    if (state.overrideUrl && state.overrideUrl !== newState.overrideUrl) {
      newState.overrideUrl = state.overrideUrl
    }
    if (newState.overrideUrl) {
      timeout = window.setTimeout(() => setState({ overrideUrl: null }), 200)
    }

    setState({ ...newState, loading: true })
  }
  const {
    fileType = 'png',
    rank = '1',
    price = '0',
    deposits = '0',
    supply = '0',
    holders = '0',
    dailyVolume = '0',
    dailyChange = '0',
    text = 'elonmusk',
    showToast = false,
    messageToast = '',
    loading = true,
    overrideUrl = null,
  } = state

  const url = new URL(window.location.origin)
  url.pathname = `${encodeURIComponent(text)}.${fileType}`
  url.searchParams.append('rank', rank)
  url.searchParams.append('price', price)
  url.searchParams.append('deposits', deposits)
  url.searchParams.append('supply', supply)
  url.searchParams.append('holders', holders)
  url.searchParams.append('dailyVolume', dailyVolume)
  url.searchParams.append('dailyChange', dailyChange)

  return H(
    'div',
    { className: 'split' },
    H(
      'div',
      { className: 'pull-left' },
      H(
        'div',
        H(Field, {
          label: 'File Type',
          input: H(Dropdown, {
            options: fileTypeOptions,
            value: fileType,
            onchange: (val: FileType) => setLoadingState({ fileType: val }),
          }),
        }),
        H(Field, {
          label: 'Username',
          input: H(TextInput, {
            value: text,
            oninput: (val: string) => {
              console.log('oninput ' + val)
              setLoadingState({ text: val, overrideUrl: url })
            },
          }),
        }),
        H(Field, {
          label: 'Rank',
          input: H(TextInput, {
            value: rank,
            oninput: (val: string) => {
              console.log('oninput ' + val)
              setLoadingState({ text: val, overrideUrl: url })
            },
          }),
        }),
        H(Field, {
          label: 'Price',
          input: H(TextInput, {
            value: price,
            oninput: (val: string) => {
              console.log('oninput ' + val)
              setLoadingState({ text: val, overrideUrl: url })
            },
          }),
        }),
        H(Field, {
          label: 'Deposits',
          input: H(TextInput, {
            value: deposits,
            oninput: (val: string) => {
              console.log('oninput ' + val)
              setLoadingState({ text: val, overrideUrl: url })
            },
          }),
        }),
        H(Field, {
          label: 'Supply',
          input: H(TextInput, {
            value: supply,
            oninput: (val: string) => {
              console.log('oninput ' + val)
              setLoadingState({ text: val, overrideUrl: url })
            },
          }),
        }),
        H(Field, {
          label: 'Holders',
          input: H(TextInput, {
            value: holders,
            oninput: (val: string) => {
              console.log('oninput ' + val)
              setLoadingState({ text: val, overrideUrl: url })
            },
          }),
        }),
        H(Field, {
          label: '24H Volume',
          input: H(TextInput, {
            value: dailyVolume,
            oninput: (val: string) => {
              console.log('oninput ' + val)
              setLoadingState({ text: val, overrideUrl: url })
            },
          }),
        }),
        H(Field, {
          label: '24H supply',
          input: H(TextInput, {
            value: dailyChange,
            oninput: (val: string) => {
              console.log('oninput ' + val)
              setLoadingState({ text: val, overrideUrl: url })
            },
          }),
        })
      )
    ),
    H(
      'div',
      { className: 'pull-right' },
      H(ImagePreview, {
        src: overrideUrl ? overrideUrl.href : url.href,
        loading: loading,
        onload: () => setState({ loading: false }),
        onerror: () => {
          setState({ showToast: true, messageToast: 'Oops, an error occurred' })
          setTimeout(() => setState({ showToast: false }), 2000)
        },
        onclick: (e: Event) => {
          e.preventDefault()
          const success = copee.toClipboard(url.href)
          if (success) {
            setState({
              showToast: true,
              messageToast: 'Copied image URL to clipboard',
            })
            setTimeout(() => setState({ showToast: false }), 3000)
          } else {
            window.open(url.href, '_blank')
          }
          return false
        },
      })
    ),
    H(Toast, {
      message: messageToast,
      show: showToast,
    })
  )
}

R(H(App), document.getElementById('app'))
