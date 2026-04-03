// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2026 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

using System.Text.Json;
using Bunit;
using Microsoft.AspNetCore.Components;
using SiemensIXBlazor.Components.Input;
using Xunit;

namespace SiemensIXBlazor.Tests;

public class InputTest : TestContextBase
{
    [Fact]
    public void InputRendersWithId()
    {
        // Arrange & Act
        var cut = RenderComponent<Input>(parameters => parameters
            .Add(p => p.Id, "test-input"));

        // Assert
        var element = cut.Find("ix-input");
        Assert.Equal("test-input", element.GetAttribute("id"));
    }

    [Fact]
    public void ChangeEventWorks()
    {
        // Arrange
        var received = string.Empty;
        var cut = RenderComponent<Input>(parameters => parameters
            .Add(p => p.Id, "test-input")
            .Add(p => p.ChangeEvent, EventCallback.Factory.Create<string>(this, (string val) => received = val)));

        // Act
        cut.Instance.Change(JsonDocument.Parse("\"hello\"").RootElement);

        // Assert
        Assert.Equal("hello", received);
    }

    [Fact]
    public void ChangeEventReceivesEmptyStringWhenValueIsNull()
    {
        // Arrange
        var received = "initial";
        var cut = RenderComponent<Input>(parameters => parameters
            .Add(p => p.Id, "test-input")
            .Add(p => p.ChangeEvent, EventCallback.Factory.Create<string>(this, (string val) => received = val)));

        // Act
        cut.Instance.Change(JsonDocument.Parse("null").RootElement);

        // Assert
        Assert.Equal(string.Empty, received);
    }
}
