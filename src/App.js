import { useState } from 'react'
import TRAndSubTR from './TRAndSubTR'
import styles from './table.module.css'

function App() {
  const [tableData, setTableData] = useState([
    {
      title: 'Show Checking with Internet',
      primary: {
        status: 'full',
        text: '$ 20'
      },
      plus: {
        status: 'half',
        text: '$ 0'
      },
      premier: {
        status: 'empty',
        text: '$ 20'
      },
      subData: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: 'full',
            text: '$ 2000'
          },
          plus: {
            status: 'half',
            text: '$ 500'
          },
          premier: {
            status: 'full',
            text: '$ 300'
          }
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: 'empty',
            text: '$ 10'
          },
          plus: {
            status: 'empty',
            text: '$ 0'
          },
          premier: {
            status: 'empty',
            text: ''
          }
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: 'empty',
            text: '$ 10'
          },
          plus: {
            status: 'empty',
            text: '$ 0'
          },
          premier: {
            status: 'empty',
            text: ''
          }
        }
      ]
    },
    {
      title: '',
      primary: {
        status: 'full',
        text: ''
      },
      plus: {
        status: 'empty',
        text: '$ 10'
      },
      premier: {
        status: 'full',
        text: '$ 10'
      },
      subData: []
    },
    {
      title: 'Show Checking with Internet 222',
      primary: {
        status: 'full',
        text: '$ 20'
      },
      plus: {
        status: 'empty',
        text: '$ 0'
      },
      premier: {
        status: 'empty',
        text: '$ 20'
      },
      subData: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: 'full',
            text: '$ 20'
          },
          plus: {
            status: 'empty',
            text: '$ 0'
          },
          premier: {
            status: 'full',
            text: '$ 30'
          }
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: 'empty',
            text: '$ 10'
          },
          plus: {
            status: 'empty',
            text: '$ 0'
          },
          premier: {
            status: 'empty',
            text: ''
          }
        }
      ]
    },
    {
      title: 'Lorem title',
      primary: {
        status: 'full',
        text: '$ 20'
      },
      plus: {
        status: 'empty',
        text: '$ 0'
      },
      premier: {
        status: 'empty',
        text: '$ 330'
      },
      subData: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: 'full',
            text: '$ 20'
          },
          plus: {
            status: 'empty',
            text: '$ 0'
          },
          premier: {
            status: 'full',
            text: '$ 30'
          }
        },
        {
          text: 'dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: 'empty',
            text: '$ 110'
          },
          plus: {
            status: 'empty',
            text: '$ 20'
          },
          premier: {
            status: 'full',
            text: '$ 11'
          },
        },
        {
          text: 'dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: 'full',
            text: '$ 1'
          },
          plus: {
            status: 'full',
            text: ''
          },
          premier: {
            status: 'full',
            text: '$ 11'
          },
        }
      ]
    },
    {
      title: 'Lorem title',
      primary: {
        status: 'full',
        text: '$ 20'
      },
      plus: {
        status: 'empty',
        text: '$ 0'
      },
      premier: {
        status: 'empty',
        text: '$ 330'
      },
      subData: [
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: 'full',
            text: '$ 20'
          },
          plus: {
            status: 'empty',
            text: '$ 0'
          },
          premier: {
            status: 'full',
            text: '$ 30'
          }
        },
        {
          text: 'dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: 'empty',
            text: '$ 110'
          },
          plus: {
            status: 'empty',
            text: '$ 20'
          },
          premier: {
            status: 'full',
            text: '$ 11'
          },
        },
        {
          text: 'dolor sit amet consectetur adipisicing elit. Mollitia, laborum.',
          primary: {
            status: 'full',
            text: '$ 1'
          },
          plus: {
            status: 'full',
            text: ''
          },
          premier: {
            status: 'full',
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
              style={{ transform: isPrimaryHovered ? 'scale(1.1)' : 'scale(1)' }}
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
              // based even add
              trStylingClass={index % 2 ? '#fff' : '#f2f2f2'}
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
