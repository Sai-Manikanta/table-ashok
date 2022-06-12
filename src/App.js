import { useState } from 'react'
import TRAndSubTR from './TRAndSubTR'
import styles from './table.module.css'

function App() {
  const [tableData, setTableData] = useState([
    {
      title: 'Show Checking with Internet',
      primary: {
        status: true,
        text: '$ 20'
      },
      plus: {
        status: false,
        text: '$ 0'
      },
      premier: {
        status: false,
        text: '$ 20'
      },
      subData: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: true,
            text: '$ 20'
          },
          plus: {
            status: false,
            text: '$ 0'
          },
          premier: {
            status: true,
            text: '$ 30'
          }
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: false,
            text: '$ 10'
          },
          plus: {
            status: false,
            text: '$ 0'
          },
          premier: {
            status: false,
            text: ''
          }
        }
      ]
    },
    {
      title: '',
      primary: {
        status: true,
        text: ''
      },
      plus: {
        status: false,
        text: '$ 10'
      },
      premier: {
        status: true,
        text: '$ 10'
      },
      subData: []
    },
    {
      title: 'Lorem title',
      primary: {
        status: true,
        text: '$ 20'
      },
      plus: {
        status: false,
        text: '$ 0'
      },
      premier: {
        status: false,
        text: '$ 330'
      },
      subData: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: true,
            text: '$ 20'
          },
          plus: {
            status: false,
            text: '$ 0'
          },
          premier: {
            status: true,
            text: '$ 30'
          }
        },
        {
          text: 'dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: false,
            text: '$ 110'
          },
          plus: {
            status: false,
            text: '$ 20'
          },
          premier: {
            status: true,
            text: '$ 11'
          },
        },
        {
          text: 'dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: true,
            text: '$ 1'
          },
          plus: {
            status: true,
            text: ''
          },
          premier: {
            status: true,
            text: '$ 11'
          },
        }
      ]
    }
  ]);

  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isPlusHovered, setIsPlusHovered] = useState(false);
  const [isPremierHovered, setIsPremierHovered] = useState(false);

  return (
    <div style={{ padding: '30px' }}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th
              onMouseEnter={() => setIsPrimaryHovered(true)}
              onMouseLeave={() => setIsPrimaryHovered(false)}
              className={styles.tableHeading}
            >
              Primary
            </th>
            <th
              onMouseEnter={() => setIsPlusHovered(true)}
              onMouseLeave={() => setIsPlusHovered(false)}
              className={styles.tableHeading}
            >
              Plus
            </th>
            <th
              onMouseEnter={() => setIsPremierHovered(true)}
              onMouseLeave={() => setIsPremierHovered(false)}
              className={styles.tableHeading}
            >
              Premier
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <TRAndSubTR
              key={index}
              data={data}
              title={data.title}
              primary={data.primary}
              plus={data.plus}
              premier={data.premier}
              subData={data.subData}
              isPrimaryHovered={isPrimaryHovered}
              isPlusHovered={isPlusHovered}
              isPremierHovered={isPremierHovered}
            />
          ))}
        </tbody>
      </table>
    </div >
  );
}

export default App;
