import React, { useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { useSelector } from "react-redux";
import { NotesState } from '../../reducer/notesReducer';
import { useNavigate } from 'react-router-dom';



interface Note {
  name: string;
  surname: string;
  gender: string;
  phonenumber: string;
  nationality: string;
  manage: string;
}

interface ItemsType {
  [x: string]: any;
  notes: Note[];
}

interface DataType extends Note {
  key: React.Key;
}



const TableForm: React.FC = () => {
  
  const navigate = useNavigate();

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const notes = useSelector<NotesState, Note[]>(
    (state: NotesState) => state.notes || []
    );
    const [data, setData] = useState<DataType[]>([]);
    const [items, setItems] = useState<any[]>([]);
    
  
  // Store notes in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify({ notes }));
  }, [notes]);

  // Update items state when notes changes
  useEffect(() => {
    setItems(notes);
  }, [notes]);

  useEffect(() => {
    if (items?.notes) {
      console.log("🚀 60 ~ useEffect ~ items:", items?.notes);
      const mappedData = items?.notes.map((item: ItemsType, index: number) => ({
        key: index,
        name: item?.name,
        gender: item?.gender,
        phonenumber: item?.phonenumber,
        surname: item?.surname,
        nationality: item?.nationality,
      }));

      console.log("🚀 ~ mappedData:", mappedData);
      setData(mappedData || []);
    }
  }, [items]);

  
  const start = () => {
    setLoading(true);
    // Filter out the selected rows
    const updatedData = data.filter(item => !selectedRowKeys.includes(item.key));  
    setData(updatedData);  
    setSelectedRowKeys([]);
    setLoading(false);
  };
  

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  // navigate
  const columns: TableColumnsType<DataType> = [
  
    {
      title: 'ชื่อ',
      dataIndex: 'name',
    },
    {
      title: 'นามสกุล',
      dataIndex: 'surname',
    },
    {
      title: 'เพศ',
      dataIndex: 'gender',
    },
    {
      title: 'หมายเลขโทรศัพท์',
      dataIndex: 'phonenumber',
    },
    {
      title: 'สัญชาติ',
      dataIndex: 'nationality',
    },
    {
      title: 'จัดการ',
      dataIndex: 'manage',
      render: (text,record) => (
        <Button
          className='form-search-payment-btn btn-margin btn-size'
          onClick={() => SendERP(record)}
          value={text}
        >
        แก้ไข
        </Button>
      ),
    },
  ];

  const SendERP = (record: DataType) => {
      // console.log("🚀 ~ record:", record)
        // const id = record?.key;
        // console.log("🚀 ~ SendERP ~ id:", id)
        navigate("/detail", { state: { record: record } });
      }
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          ลบข้อมูล
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table 
        rowSelection={rowSelection} 
        columns={columns} 
        dataSource={data} />
    </div>
  );
};

export default TableForm;

