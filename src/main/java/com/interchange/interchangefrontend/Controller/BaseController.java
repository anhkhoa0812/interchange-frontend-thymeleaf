package com.interchange.interchangefrontend.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class BaseController {
    @GetMapping("/")
    public String login() {
        return "ui-dangnhap";
    }
    @GetMapping("/staff-home")
    public String home() {
        return "ui-staff-home";
    }
    @GetMapping("/category-product-management")
    public String categoryProductManagement() {
        return "ui-quanlyphanloai";
    }
    @GetMapping("/category-product-detail")
    public String categoryProductDetail() {
        return "ui-chitietphanloai";
    }
    @GetMapping("/material-manage")
    public String materialManagement() {
        return "ui-quanlychatlieusanpham";
    }
    @GetMapping("/category-product-add")
    public String materialDetail() {
        return "ui-themphanloai";
    }
    @GetMapping("material-detail")
    public String materialDetailPage() {
        return "ui-chitietquanlychatlieu";
    }
    @GetMapping("/material-add")
    public String materialAdd() {
        return "ui-themchatlieu";
    }
    @GetMapping("/product-management")
    public String productManagement() {
        return "ui-quanlysanpham";
    }
    @GetMapping("/product-add")
    public String productAdd() {
        return "ui-themsanpham";
    }
    @GetMapping("/product-detail")
    public String productDetail() {
        return "ui-chitietsanpham";
    }
    @GetMapping("/customer-management")
    public String customerManagement() {
        return "ui-quanlynguoidung";
    }
    @GetMapping("/customer-detail")
    public String customerDetail() {
        return "ui-chitietnguoidung";
    }
    @GetMapping("/customer-add")
    public String customerAdd() {
        return "ui-themnguoidung";
    }
    @GetMapping("/admin-home")
    public String adminHome() {
        return "admin-ui-admin-workspace";
    }
    @GetMapping("/supplier-management")
    public String supplierManagement() {
        return "admin-ui-quanlynhacungcap";
    }
    @GetMapping("/supplier-add")
    public String supplierAdd() {
        return "admin-ui-themnhacungcap";
    }
    @GetMapping("/supplier-detail")
    public String supplierDetail() {
        return "admin-ui-chitietnhacungcap";
    }
    @GetMapping("/staff-management")
    public String staffManagement() {
        return "admin-ui-quanlynhanvien";
    }
    @GetMapping("/staff-detail")
    public String staffDetail() {
        return "admin-ui-chitietnhanvien";
    }
    @GetMapping("/staff-add")
    public String staffAdd() {
        return "admin-ui-themnhanvien";
    }
    @GetMapping("/create-quotation")
    public String createQuotation() {
        return "quotationmanagement/ui-taobaogia";
    }

    @GetMapping("/update-quotation")
    public String updateQuotation() {
        return "quotationmanagement/ui-capnhatbaogia";
    }

    @GetMapping("/blog-management")
    public String blogManagement() {
        return "blog/blog-management";
    }

    @GetMapping("/request-management")
    public String requestManagement() {
        return "quotationmanagement/ui-quanlypheduyet";
    }

    @GetMapping("/project-management")
    public String projectManagement() {
        return "quotationmanagement/ui-quanlyduan";
    }

    @GetMapping("/project-information")
    public String projectInformation() {
        return "quotationmanagement/ui-thongtinduan";
    }

    @GetMapping("/project-details")
    public String projectDetails() {
        return "quotationmanagement/ui-chitietduan";
    }
    @GetMapping("/quotation-information")
    public String quotationInformation() {
        return "quotationmanagement/ui-thongtinbaogia";
    }

    //ADMIN
    @GetMapping("/approve-quotation")
    public String approveQuotation() {
        return "admin/ui-kiemduyetbaogia";
    }

    @GetMapping("/approve-quotation/view-quotation")
    public String viewQuotation() {
        return "admin/ui-xembaogia";
    }
}
