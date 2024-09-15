export const ExternalLinkIcon = ({ size = 12, color = 'black' }) => {
    return (
        <svg width={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H11M11 1V11M11 1L1 11" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}