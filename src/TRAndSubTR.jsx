import { useState } from 'react'
import { AiOutlineDown, AiOutlineLeft } from 'react-icons/ai'
import CirleStatus from './CirleStatus'

const TRAndSubTR = ({ title, primary, plus, premier, subData, isPrimaryHovered, isPlusHovered, isPremierHovered }) => {
    const [showSubData, setShowSubData] = useState(false);

    return (
        <>
            <tr>
                {title ? (
                    <td onClick={() => setShowSubData(status => !status)}>
                        {title} {showSubData ? <AiOutlineDown /> : <AiOutlineLeft />}
                    </td>
                ) : <td></td>}
                <td style={{ boxShadow: isPrimaryHovered ? '6px 0 4px -2.3px rgba(0,0,0,0.1), -6px 0 4px -2.3px rgba(0,0,0,0.1)' : '' }}>
                    <CirleStatus fill={primary.status} text={primary.text} />
                </td>
                <td style={{ boxShadow: isPlusHovered ? '6px 0 4px -2.3px rgba(0,0,0,0.1), -6px 0 4px -2.3px rgba(0,0,0,0.1)' : '' }}>
                    <CirleStatus fill={plus.status} text={plus.text} />
                </td>
                <td style={{ boxShadow: isPremierHovered ? '6px 0 4px -2.3px rgba(0,0,0,0.1), -6px 0 4px -2.3px rgba(0,0,0,0.1)' : '' }}>
                    <CirleStatus fill={premier.status} text={premier.text} />
                </td>
            </tr>
            {showSubData && (
                <>
                    {subData.map((data, index) => (
                        <tr key={index}>
                            <td style={{ maxWidth: '150px' }}>
                                {data.text}
                            </td>
                            <td style={{ boxShadow: isPrimaryHovered ? '6px 0 4px -2.3px rgba(0,0,0,0.1), -6px 0 4px -2.3px rgba(0,0,0,0.1)' : '' }}>
                                <CirleStatus fill={data.primary.status} text={data.primary.text} />
                            </td>
                            <td style={{ boxShadow: isPlusHovered ? '6px 0 4px -2.3px rgba(0,0,0,0.1), -6px 0 4px -2.3px rgba(0,0,0,0.1)' : '' }}>
                                <CirleStatus fill={data.plus.status} text={data.plus.status} />
                            </td>
                            <td style={{ boxShadow: isPremierHovered ? '6px 0 4px -2.3px rgba(0,0,0,0.1), -6px 0 4px -2.3px rgba(0,0,0,0.1)' : '' }}>
                                <CirleStatus fill={data.premier.status} text={data.premier.status} />
                            </td>
                        </tr>
                    ))}
                </>
            )}
        </>
    )
}

export default TRAndSubTR