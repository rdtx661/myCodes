<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="../pz.css" type="text/css" />
    <script type="text/javascript" src="../pz.js"></script>
</head>
<body>
<div class="projselect">
    <div class="selects">
        <div >金融危机</div>
        <div >科目危机</div>
        <div >选择科目1</div>
        <div >选择科目2</div>
        <div >选择科目3</div>
        <div >选择科目4</div>
        <div >选择科目1</div>
        <div >选择科目2</div>
        <div >选择科目3</div>
        <div >选择科目4</div>
    </div>
    <div class="nomate">没有匹配的数据</div>
    <div class="addrow">
        <span><span class="addicon"></span><span>新增科目</span></span>
    </div>
</div>
<div class="editcontainer" style="display: none;">
        <div class="edittitle">记账凭证</div>
        <div class="tuichu"></div>
        <div class="vcmain">
            <div class="vcmainhead">
                <div class="vch_01">
                    <div class="vch_01_show hashdshow">记字第<input maxlength="4" type="text" value="">号
                        <div class="vch_msg_hd">输入的值无效。<div class="hd_over">
                            <!-- <img src="/v/p/g/img/saas/arrow.png" alt=""> -->
                        </div></div>
                    </div>
                </div>
                <div class="datewarp">
                <?php
                $this->module('saas_account_helper', 'date');
                ?>
                </div>
                <div class="vch_03 hashdshow">
                    附单据<input maxlength="4" type="text" value="">张
                    <a class="chakan" href="javascript:void(0)" target="_self">查看</a>
                    <div class="vch_msg_hd">输入的值无效。<div class="hd_over">
                        <!-- <img src="/v/p/g/img/saas/arrow.png" alt=""> -->
                    </div></div>
                </div>
            </div>
            <div class="common_list">
                <!-- commonlist headdiv -->
                    <div class="cl_headdiv">
                        <ul class="cl_headiv_ul">
                            <li class="vcsummary">摘要</li>
                            <li class="nvproj">会计科目</li>
                            <li class="vcmoneytitle"><div>借方金额</div>
                                <ul>
                                    <li>亿</li>
                                    <li>千</li>
                                    <li class="lineblue">百</li>
                                    <li>十</li>
                                    <li>万</li>
                                    <li class="lineblue">千</li>
                                    <li>百</li>
                                    <li>十</li>
                                    <li class="linered">元</li>
                                    <li>角</li>
                                    <li>分</li>
                                </ul>
                            </li>
                            <li class="vcmoneytitle"><div>贷方金额</div>
                                <ul>
                                    <li>亿</li>
                                    <li>千</li>
                                    <li class="lineblue">百</li>
                                    <li>十</li>
                                    <li>万</li>
                                    <li class="lineblue">千</li>
                                    <li>百</li>
                                    <li>十</li>
                                    <li class="linered">元</li>
                                    <li>角</li>
                                    <li>分</li>
                                </ul>
                            </li>
                        </ul>
                        <div style="clear:both;"></div>
                </div>
                <div class="maincl_warp">
                        <div class="cl_divs">
                            <div class="addulicon ulovericon" onclick=adddiv(this)><span></span></div>
                            <ul class="cl_divs_ul">
                                    <li class="vcsummary">
                                        <div class="lioverdef"></div>
                                        <div class="summary_warp liover">
                                            <textarea class="inputarea textmore"></textarea>
                                        </div>
                                    </li>
                                    <li class="nvproj">
                                        <div class="lioverdef"></div>
                                        <div class="defwarp">
                                            <div class="typename"></div>
                                            <div class="moneynum">
                                                余额：<span class="num"></span>
                                            </div>
                                        </div>
                                        <div class="projselect_warp liover"> 
                                            <textarea class="inputarea textmore"></textarea>
                                            <div class="moneynum">
                                                余额：<span class="num"></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="vcmoney jie">
                                        <div class="getmoney"><input class="inputarea sgm jiefang" type="text" value=""></div>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li class="lineblue"></li>
                                            <li></li>
                                            <li></li>
                                            <li class="lineblue"></li>
                                            <li></li>
                                            <li></li>
                                            <li class="linered"></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </li>
                                    <li class="vcmoney vcm_last dai">
                                        <div class="getmoney"><input class="inputarea sgm daifang" type="text" value=""></div>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li class="lineblue"></li>
                                            <li></li>
                                            <li></li>
                                            <li class="lineblue"></li>
                                            <li></li>
                                            <li></li>
                                            <li class="linered"></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </li>
                            </ul>
                                <div style="clear:both;height: 0px;width:100%;"></div>
                            <div class="delulicon ulovericon" onclick="altsmt(this)"><span></span></div>
                        </div>
                        <div class="cl_divs">
                            <div class="addulicon ulovericon" onclick=adddiv(this)><span></span></div>
                            <ul class="cl_divs_ul">
                                    <li class="vcsummary">
                                        <div class="lioverdef"></div>
                                        <div class="summary_warp liover">
                                            <textarea class="inputarea textmore"></textarea>
                                        </div>
                                    </li>
                                    <li class="nvproj">
                                        <div class="lioverdef"></div>
                                        <div class="defwarp">
                                            <div class="typename"></div>
                                            <div class="moneynum">
                                                余额：<span class="num"></span>
                                            </div>
                                        </div>
                                        <div class="projselect_warp liover">
                                            <textarea  class="inputarea textmore"></textarea>
                                            <div class="moneynum">
                                                余额：<span class="num"></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="vcmoney jie">
                                        <div class="getmoney"><input class="inputarea sgm jiefang" type="text" value=""></div>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li class="lineblue"></li>
                                            <li></li>
                                            <li></li>
                                            <li class="lineblue"></li>
                                            <li></li>
                                            <li></li>
                                            <li class="linered"></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </li>
                                    <li class="vcmoney vcm_last dai">
                                        <div class="getmoney"><input class="inputarea sgm daifang" type="text" value=""></div>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li class="lineblue"></li>
                                            <li></li>
                                            <li></li>
                                            <li class="lineblue"></li>
                                            <li></li>
                                            <li></li>
                                            <li class="linered"></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </li>
                            </ul>
                                <div style="clear:both;height: 0px;width:100%;"></div>
                            <div class="delulicon ulovericon" onclick="altsmt(this)"><span></span></div>
                        </div>
                        <div class="cl_divs">
                            <div class="addulicon ulovericon" onclick=adddiv(this)><span></span></div>
                            <ul class="cl_divs_ul">
                                    <li class="vcsummary">
                                        <div class="lioverdef"></div>
                                        <div class="summary_warp liover">
                                            <textarea class="inputarea textmore"></textarea>
                                        </div>
                                    </li>
                                    <li class="nvproj">
                                        <div class="lioverdef"></div>
                                        <div class="defwarp">
                                            <div class="typename"></div>
                                            <div class="moneynum">
                                                余额：<span class="num"></span>
                                            </div>
                                        </div>
                                        <div class="projselect_warp liover">
                                            <textarea class="inputarea textmore" ></textarea>
                                            <div class="moneynum">
                                                余额：<span class="num"></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="vcmoney jie">
                                        <div class="getmoney"><input class="inputarea sgm jiefang" type="text" value=""></div>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li class="lineblue"></li>
                                            <li></li>
                                            <li></li>
                                            <li class="lineblue"></li>
                                            <li></li>
                                            <li></li>
                                            <li class="linered"></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </li>
                                    <li class="vcmoney vcm_last dai">
                                        <div class="getmoney"><input class="inputarea sgm daifang" type="text" value=""></div>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li class="lineblue"></li>
                                            <li></li>
                                            <li></li>
                                            <li class="lineblue"></li>
                                            <li></li>
                                            <li></li>
                                            <li class="linered"></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </li>
                            </ul>
                                <div style="clear:both;height: 0px;width:100%;"></div>
                            <div class="delulicon ulovericon" onclick="altsmt(this)"><span></span></div>
                        </div>
                    <div class="cl_divs cl_last">
                        <div class="addulicon ulovericon" onclick=adddiv(this)><span></span></div>
                        <ul class="cl_divs_ul">
                                <li class="vcsummary">
                                    <div class="lioverdef"></div>
                                    <div class="summary_warp liover">
                                        <textarea class="inputarea textmore"></textarea>
                                    </div>
                                </li>
                                <li class="nvproj">
                                    <div class="lioverdef"></div>
                                    <div class="defwarp">
                                        <div class="typename"></div>
                                        <div class="moneynum">
                                            余额：<span class="num"></span>
                                        </div>
                                    </div>
                                    <div class="projselect_warp liover">
                                        <textarea class="inputarea textmore"></textarea>
                                            <div class="moneynum">
                                                余额：<span class="num"></span>
                                            </div>
                                    </div>
                                </li>
                                <li class="vcmoney jie">
                                    <div class="getmoney"><input class="inputarea sgm jiefang" type="text" value=""></div>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li class="lineblue"></li>
                                        <li></li>
                                        <li></li>
                                        <li class="lineblue"></li>
                                        <li></li>
                                        <li></li>
                                        <li class="linered"></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </li>
                                <li class="vcmoney vcm_last dai">
                                    <div class="getmoney"><input class="inputarea sgm daifang" type="text" value=""></div>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li class="lineblue"></li>
                                        <li></li>
                                        <li></li>
                                        <li class="lineblue"></li>
                                        <li></li>
                                        <li></li>
                                        <li class="linered"></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </li>
                        </ul>
                        <div style="clear:both;height: 0px;width:100%;"></div>
                        <div class="delulicon ulovericon" onclick="altsmt(this)"><span></span></div>
                    </div>
                        <div style="clear:both;height: 0px;width:100%;"></div>
                </div>
                <div class="cl_divs cl_divs_sum">
                    <ul class="cl_divs_ul">
                            <li class="vcsummary">
                                <div class="vcsummary_heji">
                                    合计:<span></span>
                                </div>
                            </li>
                            <li class="vcmoney jie">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li class="lineblue"></li>
                                    <li></li>
                                    <li></li>
                                    <li class="lineblue"></li>
                                    <li></li>
                                    <li></li>
                                    <li class="linered"></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </li>
                            <li class="vcmoney dai">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li class="lineblue"></li>
                                    <li></li>
                                    <li></li>
                                    <li class="lineblue"></li>
                                    <li></li>
                                    <li></li>
                                    <li class="linered"></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </li>
                    </ul>
                        <div style="clear:both;height: 0px;width:100%;"></div>
                </div>
            </div>
                <!-- commonlist footdiv -->
            <div class="cl_footdiv">
                <div class="customer">
                        <span class="madeby">制单人：</span><span class="md_name"><span>18090555664</span><div class="editicon"><span></span></div></span>
                </div>
            </div>
            <div class="btncontainer">
                    <div>
                        <span class="quxiao">取消</span>
                        <span class="baocun">保存</span>
                    </div>
            </div>
    </div>
</div>
</body>
</html>