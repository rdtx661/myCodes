<?php
	// 合并表格使用2003excel版本 后缀xls
	use PhpOffice\PhpSpreadsheet as pp;
	use PhpOffice\PhpSpreadsheet\Writer as ppw;
	$fileName=$_GET["fileName"];
	$str=$_GET["headInfo"];
	$headInfo=json_decode($str,true);
	$data=$_GET["data"];
	$bianzhi=$_GET["bianzhi"];
// ===============
	header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
	header('Content-Disposition: attachment;filename="'.$fileName.'.xlsx"');//告诉浏览器输出名称
 	header('Cache-Control: max-age=0');
		$spreadsheet = new pp\Spreadsheet();
		$sheet = $spreadsheet->getActiveSheet();
		$sheet->setCellValue('A1',$_GET["getTitle"]);
		$arrayData = [
			['科目：'.$headInfo['km'].'','','',$headInfo['date'],'','','单位：'.$headInfo['unit']]
		];
		$sheet->fromArray(
				$arrayData,
				NULL,
				'A2'
		);

		$arr=explode(',/n,',$data);
		$backArr[0]=['期间','摘要','借方','','贷方','方向','余额'];
		for($i=0;$i<count($arr);$i++){
			$tempArr=explode(',',$arr[$i]);
			$backArr[$i+1]=$tempArr;
		}
		$backArr[count($arr)+1]=['编制单位：'.$bianzhi];
		$sheet->fromArray(
		        $backArr,  
		        NULL,
		        'A3'         
		    );
		// 设置内容样式和编制单位
		$sheet->getRowDimension('1')->setRowHeight(45);
		$needS=3+count($arr);
		for ($i=0; $i < $needS; $i++) { 
			$sheet->getRowDimension($i+2)->setRowHeight(20);
		}
		$styleArray = [
		    'alignment' => [
		        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
		        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_TOP,
		    ],
		];
		// 设置标题文字样式
		$sheet->getStyle('A1:G1')->applyFromArray($styleArray);
		$styleArray = [
		    'alignment' => [
		        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
		        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
		    ],
		];
		$sheet->getStyle('A2:G2')->applyFromArray($styleArray);
		$sheet->getStyle('A3:G3')->applyFromArray($styleArray);
	
		$maxSet=4+count($arr);

		// 设置内容样式和编制单位
		$sheet->getStyle('A4:A'.$maxSet)->applyFromArray($styleArray);
		// 设置内容样式和编制单位
		$sheet->getStyle('F4:F'.$maxSet)->applyFromArray($styleArray);
		$styleArray = [
		    'alignment' => [
		        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_LEFT,
		        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,

		    ],
		];
		$sheet->getStyle('A2:C2')->applyFromArray($styleArray);
		$sheet->getStyle('D2:F2')->applyFromArray($styleArray);
		// 设置内容样式和编制单位
		$sheet->getStyle('B4:B'.$maxSet)->applyFromArray($styleArray);		
		$styleArray = [
		    'alignment' => [
		        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,
		        'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::VERTICAL_CENTER,
		    ],
		];
		// 设置内容样式和编制单位
		$sheet->getStyle('C4:C'.$maxSet)->applyFromArray($styleArray);		
		// 设置内容样式和编制单位
		$sheet->getStyle('E4:E'.$maxSet)->applyFromArray($styleArray);	
		// 设置内容样式和编制单位
		$rMaxSet=3+count($arr);
		$sheet->getStyle('G2:G'.$rMaxSet)->applyFromArray($styleArray);
		$sheet->getStyle('G2:G'.$rMaxSet)->applyFromArray($styleArray);
		$sheet->mergeCells('A1:G1');
		$sheet->mergeCells('A2:C2');
		$sheet->mergeCells('D2:F2');
		// 设置合并的表格
		for($i=4;$i<count($arr)+4;$i++){
			// 设置内容样式和编制单位
			$sheet->mergeCells('C'.$i.':D'.$i);
			// 设置内容样式和编制单位
			$sheet->getStyle('A'.$i.':G'.$i)->getFont()->setName('Arial')->setSize(9);
		}
		$sheet->getStyle('A1:G1')->getFont()->setBold(true)->setName('Arial')->setSize(16);
		$sheet->getStyle('A3:G3')->getFont()->setBold(true);
		$styleArray = [
		    'borders' => [
		        'allBorders' => [
		            'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
		            'color' => ['argb' => '000000'],
		        ],
		    ],
		];
		$sheet->getColumnDimension('A')->setWidth(14);
		$sheet->getColumnDimension('B')->setWidth(12);
		$sheet->getColumnDimension('C')->setWidth(8);
		$sheet->getColumnDimension('D')->setWidth(8);
		$sheet->getColumnDimension('E')->setWidth(16);
		$sheet->getColumnDimension('F')->setWidth(14);
		$sheet->getColumnDimension('G')->setWidth(16);
		for($i=3;$i<=count($arr)+3;$i++){
			// 设置内容样式和编制单位
			$sheet->getStyle('A'.$i.':G'.$i)->applyFromArray($styleArray);
		}
		$writer = new ppw\Xlsx($spreadsheet);
		$writer->save('php://output');
?>
