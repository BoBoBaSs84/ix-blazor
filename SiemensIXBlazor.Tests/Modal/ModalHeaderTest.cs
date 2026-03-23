// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

using Bunit;
using SiemensIXBlazor.Components.Modal;
using Xunit;

namespace SiemensIXBlazor.Tests.Modal
{
    public class ModalHeaderTest : TestContextBase
    {
        [Fact]
        public void ModalHeader_Should_Render_With_Basic_Properties()
        {
            // Arrange & Act
            var component = RenderComponent<ModalHeader>(parameters => parameters
                .Add(p => p.Id, "test-modal-header")
            );

            // Assert
            var header = component.Find("ix-modal-header");
            Assert.NotNull(header);
            Assert.Equal("test-modal-header", header.GetAttribute("id"));
        }

        [Fact]
        public void ModalHeader_Should_Render_With_Icon()
        {
            // Arrange & Act
            var component = RenderComponent<ModalHeader>(parameters => parameters
                .Add(p => p.Id, "test-modal-header")
                .Add(p => p.Icon, "info")
            );

            // Assert
            var header = component.Find("ix-modal-header");
            Assert.Equal("info", header.GetAttribute("icon"));
        }

        [Fact]
        public void ModalHeader_Should_Render_With_ChildContent()
        {
            // Arrange & Act
            var component = RenderComponent<ModalHeader>(parameters => parameters
                .Add(p => p.Id, "test-modal-header")
                .AddChildContent("<h2>Modal Title</h2>")
            );

            // Assert
            var header = component.Find("ix-modal-header");
            Assert.Contains("Modal Title", header.InnerHtml);
        }

        [Fact]
        public void ModalHeader_Should_Render_With_CSS_Class()
        {
            // Arrange & Act
            var component = RenderComponent<ModalHeader>(parameters => parameters
                .Add(p => p.Id, "test-modal-header")
                .Add(p => p.Class, "custom-header-class")
            );

            // Assert
            var header = component.Find("ix-modal-header");
            Assert.Equal("custom-header-class", header.GetAttribute("class"));
        }

        [Fact]
        public void ModalHeader_Should_Render_With_Style()
        {
            // Arrange & Act
            var component = RenderComponent<ModalHeader>(parameters => parameters
                .Add(p => p.Id, "test-modal-header")
                .Add(p => p.Style, "color: blue;")
            );

            // Assert
            var header = component.Find("ix-modal-header");
            Assert.Equal("color: blue;", header.GetAttribute("style"));
        }
    }
}
